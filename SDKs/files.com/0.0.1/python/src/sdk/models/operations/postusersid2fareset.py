import dataclasses



@dataclasses.dataclass
class PostUsersId2faResetPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersId2faResetRequest:
    path_params: PostUsersId2faResetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUsersId2faResetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
