import dataclasses
from typing import Optional
from ..shared import groupuserentity as shared_groupuserentity


@dataclasses.dataclass
class GetGroupsGroupIDUsersPathParams:
    group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupsGroupIDUsersQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupsGroupIDUsersRequest:
    path_params: GetGroupsGroupIDUsersPathParams = dataclasses.field()
    query_params: GetGroupsGroupIDUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupsGroupIDUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_user_entities: Optional[list[shared_groupuserentity.GroupUserEntity]] = dataclasses.field(default=None)
    
