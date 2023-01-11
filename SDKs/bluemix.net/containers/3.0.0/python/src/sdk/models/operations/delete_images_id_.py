import dataclasses



@dataclasses.dataclass
class DeleteImagesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesIDHeaders:
    x_auth_project_id: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = dataclasses.field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagesIDRequest:
    headers: DeleteImagesIDHeaders = dataclasses.field()
    path_params: DeleteImagesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteImagesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
