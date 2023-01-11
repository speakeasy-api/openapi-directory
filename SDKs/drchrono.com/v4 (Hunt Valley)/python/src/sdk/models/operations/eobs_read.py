import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import eobobject as shared_eobobject


@dataclasses.dataclass
class EobsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EobsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EobsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EobsReadRequest:
    path_params: EobsReadPathParams = dataclasses.field()
    query_params: EobsReadQueryParams = dataclasses.field()
    security: EobsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EobsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    eob_object: Optional[shared_eobobject.EobObject] = dataclasses.field(default=None)
    
