import dataclasses



@dataclasses.dataclass
class OrgsCheckPublicMembershipForUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsCheckPublicMembershipForUserRequest:
    path_params: OrgsCheckPublicMembershipForUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsCheckPublicMembershipForUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
