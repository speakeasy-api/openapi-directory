import dataclasses
from typing import Optional
from ..shared import apikeyentity as shared_apikeyentity


@dataclasses.dataclass
class GetAPIKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAPIKeysIDRequest:
    path_params: GetAPIKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_key_entity: Optional[shared_apikeyentity.APIKeyEntity] = dataclasses.field(default=None)
    
