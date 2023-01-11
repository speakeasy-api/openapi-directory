import dataclasses
from typing import Optional
from ..shared import publickeyentity as shared_publickeyentity


@dataclasses.dataclass
class PostUserPublicKeysRequestBody:
    public_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    title: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'title' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclasses.dataclass
class PostUserPublicKeysRequest:
    request: Optional[PostUserPublicKeysRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUserPublicKeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    public_key_entity: Optional[shared_publickeyentity.PublicKeyEntity] = dataclasses.field(default=None)
    
