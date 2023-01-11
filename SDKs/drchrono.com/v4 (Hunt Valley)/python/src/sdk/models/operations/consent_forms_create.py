import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import consentform as shared_consentform


@dataclasses.dataclass
class ConsentFormsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConsentFormsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConsentFormsCreateRequest:
    query_params: ConsentFormsCreateQueryParams = dataclasses.field()
    security: ConsentFormsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsentFormsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    consent_form: Optional[shared_consentform.ConsentForm] = dataclasses.field(default=None)
    
