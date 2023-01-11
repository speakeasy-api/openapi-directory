import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LabTestsDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabTestsDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabTestsDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabTestsDeleteRequest:
    path_params: LabTestsDeletePathParams = dataclasses.field()
    query_params: LabTestsDeleteQueryParams = dataclasses.field()
    security: LabTestsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabTestsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
