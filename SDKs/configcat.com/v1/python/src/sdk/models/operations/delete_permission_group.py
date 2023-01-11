import dataclasses



@dataclasses.dataclass
class DeletePermissionGroupPathParams:
    permission_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'permissionGroupId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePermissionGroupRequest:
    path_params: DeletePermissionGroupPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePermissionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
