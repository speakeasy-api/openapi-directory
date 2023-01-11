import dataclasses



@dataclasses.dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorRequest:
    path_params: EnterpriseAdminPromoteUserToBeSiteAdministratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminPromoteUserToBeSiteAdministratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
