import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class GetPublicKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPublicKeysIDRequest:
    path_params: GetPublicKeysIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPublicKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entity: Optional[shared_publickeyentity.PublicKeyEntity] = dataclasses.field(default=None)
    
