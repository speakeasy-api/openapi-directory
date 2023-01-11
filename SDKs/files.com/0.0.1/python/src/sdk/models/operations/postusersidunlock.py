import dataclasses



@dataclasses.dataclass
class PostUsersIDUnlockPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersIDUnlockRequest:
    path_params: PostUsersIDUnlockPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUsersIDUnlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
