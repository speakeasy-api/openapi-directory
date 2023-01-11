import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateCustomVerificationEmailTemplateActionEnum(str, Enum):
    UPDATE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "UpdateCustomVerificationEmailTemplate"

class GetUpdateCustomVerificationEmailTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetUpdateCustomVerificationEmailTemplateQueryParams:
    action: GetUpdateCustomVerificationEmailTemplateActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    template_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TemplateName', 'style': 'form', 'explode': True }})
    version: GetUpdateCustomVerificationEmailTemplateVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    failure_redirection_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FailureRedirectionURL', 'style': 'form', 'explode': True }})
    from_email_address: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FromEmailAddress', 'style': 'form', 'explode': True }})
    success_redirection_url: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SuccessRedirectionURL', 'style': 'form', 'explode': True }})
    template_content: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TemplateContent', 'style': 'form', 'explode': True }})
    template_subject: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TemplateSubject', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUpdateCustomVerificationEmailTemplateRequest:
    headers: GetUpdateCustomVerificationEmailTemplateHeaders = dataclasses.field()
    query_params: GetUpdateCustomVerificationEmailTemplateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateCustomVerificationEmailTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
