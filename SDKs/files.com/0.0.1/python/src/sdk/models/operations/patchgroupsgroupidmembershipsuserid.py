import dataclasses
from typing import Optional
from ..shared import groupuserentity as shared_groupuserentity


@dataclasses.dataclass
class PatchGroupsGroupIDMembershipsUserIDPathParams:
    group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchGroupsGroupIDMembershipsUserIDRequestBody:
    admin: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'admin' }})
    

@dataclasses.dataclass
class PatchGroupsGroupIDMembershipsUserIDRequest:
    path_params: PatchGroupsGroupIDMembershipsUserIDPathParams = dataclasses.field()
    request: Optional[PatchGroupsGroupIDMembershipsUserIDRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PatchGroupsGroupIDMembershipsUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_user_entity: Optional[shared_groupuserentity.GroupUserEntity] = dataclasses.field(default=None)
    
