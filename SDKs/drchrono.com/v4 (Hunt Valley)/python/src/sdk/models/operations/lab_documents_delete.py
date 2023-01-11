import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class LabDocumentsDeletePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabDocumentsDeleteQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabDocumentsDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabDocumentsDeleteRequest:
    path_params: LabDocumentsDeletePathParams = dataclasses.field()
    query_params: LabDocumentsDeleteQueryParams = dataclasses.field()
    security: LabDocumentsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabDocumentsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
