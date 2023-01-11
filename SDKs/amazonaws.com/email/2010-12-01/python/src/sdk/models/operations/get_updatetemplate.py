import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetUpdateTemplateActionEnum(str, Enum):
    UPDATE_TEMPLATE = "UpdateTemplate"


@dataclasses.dataclass
class GetUpdateTemplateTemplate:
    r"""GetUpdateTemplateTemplate
    The content of the email, composed of a subject line, an HTML part, and a text-only part.
    """
    
    template_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TemplateName' }})
    html_part: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'HtmlPart' }})
    subject_part: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SubjectPart' }})
    text_part: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TextPart' }})
    
class GetUpdateTemplateVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetUpdateTemplateQueryParams:
    action: GetUpdateTemplateActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    template: GetUpdateTemplateTemplate = dataclasses.field(metadata={'query_param': { 'field_name': 'Template', 'style': 'form', 'explode': True }})
    version: GetUpdateTemplateVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUpdateTemplateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUpdateTemplateRequest:
    headers: GetUpdateTemplateHeaders = dataclasses.field()
    query_params: GetUpdateTemplateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUpdateTemplateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
