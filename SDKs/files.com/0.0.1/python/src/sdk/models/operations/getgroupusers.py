import dataclasses
from typing import Optional
from ..shared import groupuserentity as shared_groupuserentity


@dataclasses.dataclass
class GetGroupUsersQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetGroupUsersRequest:
    query_params: GetGroupUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_user_entities: Optional[list[shared_groupuserentity.GroupUserEntity]] = dataclasses.field(default=None)
    
