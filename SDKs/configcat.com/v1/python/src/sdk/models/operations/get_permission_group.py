import dataclasses
from typing import Optional
from ..shared import permissiongroupmodel as shared_permissiongroupmodel


@dataclasses.dataclass
class GetPermissionGroupPathParams:
    permission_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPermissionGroupRequest:
    path_params: GetPermissionGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPermissionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_group_model: Optional[shared_permissiongroupmodel.PermissionGroupModel] = dataclasses.field(default=None)
    
