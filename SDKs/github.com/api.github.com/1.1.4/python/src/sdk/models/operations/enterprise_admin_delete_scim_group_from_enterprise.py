import dataclasses



@dataclasses.dataclass
class EnterpriseAdminDeleteScimGroupFromEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseRequest:
    path_params: EnterpriseAdminDeleteScimGroupFromEnterprisePathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminDeleteScimGroupFromEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
