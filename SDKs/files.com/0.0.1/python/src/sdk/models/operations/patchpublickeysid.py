import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class PatchPublicKeysIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchPublicKeysIDRequestBody:
    title: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class PatchPublicKeysIDRequest:
    path_params: PatchPublicKeysIDPathParams = dataclasses.field()
    request: PatchPublicKeysIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchPublicKeysIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entity: Optional[shared_publickeyentity.PublicKeyEntity] = dataclasses.field(default=None)
    
