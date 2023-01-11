import dataclasses
from typing import Optional
from ..shared import permissiongroupmodel as shared_permissiongroupmodel


@dataclasses.dataclass
class GetPermissionGroupsPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPermissionGroupsRequest:
    path_params: GetPermissionGroupsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPermissionGroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_group_models: Optional[list[shared_permissiongroupmodel.PermissionGroupModel]] = dataclasses.field(default=None)
    
