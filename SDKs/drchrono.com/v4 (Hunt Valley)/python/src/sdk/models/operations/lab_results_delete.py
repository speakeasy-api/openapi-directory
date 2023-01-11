import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LabResultsDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabResultsDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabResultsDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabResultsDeleteRequest:
    path_params: LabResultsDeletePathParams = dataclasses.field()
    query_params: LabResultsDeleteQueryParams = dataclasses.field()
    security: LabResultsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabResultsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
