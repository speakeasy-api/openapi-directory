import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import customvitaltype as shared_customvitaltype


@dataclasses.dataclass
class CustomVitalsReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CustomVitalsReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CustomVitalsReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CustomVitalsReadRequest:
    path_params: CustomVitalsReadPathParams = dataclasses.field()
    query_params: CustomVitalsReadQueryParams = dataclasses.field()
    security: CustomVitalsReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CustomVitalsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    custom_vital_type: Optional[shared_customvitaltype.CustomVitalType] = dataclasses.field(default=None)
    
