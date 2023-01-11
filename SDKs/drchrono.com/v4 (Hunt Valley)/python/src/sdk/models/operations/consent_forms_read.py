import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import consentform as shared_consentform


@dataclasses.dataclass
class ConsentFormsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsentFormsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConsentFormsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConsentFormsReadRequest:
    path_params: ConsentFormsReadPathParams = dataclasses.field()
    query_params: ConsentFormsReadQueryParams = dataclasses.field()
    security: ConsentFormsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsentFormsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    consent_form: Optional[shared_consentform.ConsentForm] = dataclasses.field(default=None)
    
