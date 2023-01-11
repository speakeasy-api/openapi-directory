import dataclasses
from typing import Optional


@dataclasses.dataclass
class SeeEmailTemplateInformationQueryParams:
    email_template_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email_template_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SeeEmailTemplateInformationRequest:
    query_params: SeeEmailTemplateInformationQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SeeEmailTemplateInformationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
