import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class SublabsDeletePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SublabsDeleteSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SublabsDeleteRequest:
    path_params: SublabsDeletePathParams = dataclasses.field()
    security: SublabsDeleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SublabsDeleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
