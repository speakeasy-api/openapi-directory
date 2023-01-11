import dataclasses



@dataclasses.dataclass
class PostUsersIDResendWelcomeEmailPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersIDResendWelcomeEmailRequest:
    path_params: PostUsersIDResendWelcomeEmailPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUsersIDResendWelcomeEmailResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
