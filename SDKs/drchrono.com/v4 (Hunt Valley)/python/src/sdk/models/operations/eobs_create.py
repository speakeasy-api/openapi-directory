import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import eobobject as shared_eobobject


@dataclasses.dataclass
class EobsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EobsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EobsCreateRequest:
    query_params: EobsCreateQueryParams = dataclasses.field()
    security: EobsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EobsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    eob_object: Optional[shared_eobobject.EobObject] = dataclasses.field(default=None)
    
