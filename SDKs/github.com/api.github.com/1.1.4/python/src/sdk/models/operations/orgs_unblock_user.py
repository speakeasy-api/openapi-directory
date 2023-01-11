import dataclasses



@dataclasses.dataclass
class OrgsUnblockUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsUnblockUserRequest:
    path_params: OrgsUnblockUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsUnblockUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
