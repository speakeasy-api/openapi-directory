import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LabOrdersDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabOrdersDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabOrdersDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabOrdersDeleteRequest:
    path_params: LabOrdersDeletePathParams = dataclasses.field()
    query_params: LabOrdersDeleteQueryParams = dataclasses.field()
    security: LabOrdersDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabOrdersDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
