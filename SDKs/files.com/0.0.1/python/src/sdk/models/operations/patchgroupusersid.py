import dataclasses
from typing import Optional
from ..shared import groupuserentity as shared_groupuserentity


@dataclasses.dataclass
class PatchGroupUsersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchGroupUsersIDRequestBody:
    group_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'group_id' }})
    user_id: int = dataclasses.field(metadata={'multipart_form': { 'field_name': 'user_id' }})
    admin: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclasses.dataclass
class PatchGroupUsersIDRequest:
    path_params: PatchGroupUsersIDPathParams = dataclasses.field()
    request: PatchGroupUsersIDRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchGroupUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_user_entity: Optional[shared_groupuserentity.GroupUserEntity] = dataclasses.field(default=None)
    
