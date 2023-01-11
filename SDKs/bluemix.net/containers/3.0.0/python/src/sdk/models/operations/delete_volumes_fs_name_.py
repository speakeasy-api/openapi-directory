import dataclasses



@dataclasses.dataclass
class DeleteVolumesFsNamePathParams:
    name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVolumesFsNameHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteVolumesFsNameRequest:
    headers: DeleteVolumesFsNameHeaders = dataclasses.field()
    path_params: DeleteVolumesFsNamePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteVolumesFsNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
