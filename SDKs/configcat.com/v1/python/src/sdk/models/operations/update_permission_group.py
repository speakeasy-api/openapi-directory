import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatepermissiongrouprequest as shared_updatepermissiongrouprequest
from ..shared import permissiongroupmodel as shared_permissiongroupmodel


@dataclasses.dataclass
class UpdatePermissionGroupPathParams:
    permission_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePermissionGroupRequests:
    update_permission_group_request: Optional[shared_updatepermissiongrouprequest.UpdatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_permission_group_request1: Optional[shared_updatepermissiongrouprequest.UpdatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_permission_group_request2: Optional[shared_updatepermissiongrouprequest.UpdatePermissionGroupRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdatePermissionGroupRequest:
    path_params: UpdatePermissionGroupPathParams = dataclasses.field()
    request: UpdatePermissionGroupRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdatePermissionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_group_model: Optional[shared_permissiongroupmodel.PermissionGroupModel] = dataclasses.field(default=None)
    
