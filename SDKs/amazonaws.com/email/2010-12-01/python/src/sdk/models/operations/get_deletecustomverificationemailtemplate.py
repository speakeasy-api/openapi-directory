import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDeleteCustomVerificationEmailTemplateActionEnum(str, Enum):
    DELETE_CUSTOM_VERIFICATION_EMAIL_TEMPLATE = "DeleteCustomVerificationEmailTemplate"

class GetDeleteCustomVerificationEmailTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetDeleteCustomVerificationEmailTemplateQueryParams:
    action: GetDeleteCustomVerificationEmailTemplateActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    template_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TemplateName', 'style': 'form', 'explode': True }})
    version: GetDeleteCustomVerificationEmailTemplateVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteCustomVerificationEmailTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeleteCustomVerificationEmailTemplateRequest:
    headers: GetDeleteCustomVerificationEmailTemplateHeaders = dataclasses.field()
    query_params: GetDeleteCustomVerificationEmailTemplateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteCustomVerificationEmailTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
