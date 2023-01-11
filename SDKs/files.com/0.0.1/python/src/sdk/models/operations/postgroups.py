import dataclasses
from typing import Optional
from ..shared import groupentity as shared_groupentity


@dataclasses.dataclass
class PostGroupsRequestBody:
    admin_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'admin_ids' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'notes' }})
    user_ids: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    

@dataclasses.dataclass
class PostGroupsRequest:
    request: Optional[PostGroupsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_entity: Optional[shared_groupentity.GroupEntity] = dataclasses.field(default=None)
    
