import dataclasses
from typing import Optional
from ..shared import permissionentity as shared_permissionentity


@dataclasses.dataclass
class PostPermissionsRequestBody:
    group_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'group_id' }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    permission: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'permission' }})
    recursive: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'recursive' }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclasses.dataclass
class PostPermissionsRequest:
    request: Optional[PostPermissionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_entity: Optional[shared_permissionentity.PermissionEntity] = dataclasses.field(default=None)
    
