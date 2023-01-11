import dataclasses



@dataclasses.dataclass
class DeleteUsersIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteUsersIDRequest:
    path_params: DeleteUsersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteUsersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
