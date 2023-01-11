import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteUserRequest:
    path_params: EnterpriseAdminDeleteUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
