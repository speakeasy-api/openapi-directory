import dataclasses
from typing import Optional
from ..shared import createpermissiongrouprequest as shared_createpermissiongrouprequest
from ..shared import permissiongroupmodel as shared_permissiongroupmodel


@dataclasses.dataclass
class CreatePermissionGroupPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePermissionGroupRequests:
    create_permission_group_request: Optional[shared_createpermissiongrouprequest.CreatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_permission_group_request1: Optional[shared_createpermissiongrouprequest.CreatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_permission_group_request2: Optional[shared_createpermissiongrouprequest.CreatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreatePermissionGroupRequest:
    path_params: CreatePermissionGroupPathParams = dataclasses.field()
    request: CreatePermissionGroupRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreatePermissionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_group_model: Optional[shared_permissiongroupmodel.PermissionGroupModel] = dataclasses.field(default=None)
    
