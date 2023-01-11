import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteUserFromEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteUserFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteUserFromEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteUserFromEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
