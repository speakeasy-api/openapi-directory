import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDemoteSiteAdministratorPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDemoteSiteAdministratorRequest:
    path_params: EnterpriseAdminDemoteSiteAdministratorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDemoteSiteAdministratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
