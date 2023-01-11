import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class PostUsersUserIDAs2KeysPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersUserIDAs2KeysRequestBody:
    as2_partnership_name: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'as2_partnership_name' }})
    public_key: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'public_key' }})
    

@dataclasses.dataclass
class PostUsersUserIDAs2KeysRequest:
    path_params: PostUsersUserIDAs2KeysPathParams = dataclasses.field()
    request: PostUsersUserIDAs2KeysRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostUsersUserIDAs2KeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entity: Optional[shared_as2keyentity.As2KeyEntity] = dataclasses.field(default=None)
    
