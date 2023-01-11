import dataclasses
from typing import Optional
from ..shared import groupuserentity as shared_groupuserentity


@dataclasses.dataclass
class PostGroupUsersRequestBody:
    group_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'user_id' }})
    admin: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclasses.dataclass
class PostGroupUsersRequest:
    request: PostGroupUsersRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostGroupUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_user_entity: Optional[shared_groupuserentity.GroupUserEntity] = dataclasses.field(default=None)
    
