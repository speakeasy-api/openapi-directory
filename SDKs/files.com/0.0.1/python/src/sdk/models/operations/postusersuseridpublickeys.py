import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class PostUsersUserIDPublicKeysPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersUserIDPublicKeysRequestBody:
    public_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    title: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclasses.dataclass
class PostUsersUserIDPublicKeysRequest:
    path_params: PostUsersUserIDPublicKeysPathParams = dataclasses.field()
    request: PostUsersUserIDPublicKeysRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUsersUserIDPublicKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entity: Optional[shared_publickeyentity.PublicKeyEntity] = dataclasses.field(default=None)
    
