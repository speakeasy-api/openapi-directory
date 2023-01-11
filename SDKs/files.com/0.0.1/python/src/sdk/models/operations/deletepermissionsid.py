import dataclasses



@dataclasses.dataclass
class DeletePermissionsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePermissionsIDRequest:
    path_params: DeletePermissionsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePermissionsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
