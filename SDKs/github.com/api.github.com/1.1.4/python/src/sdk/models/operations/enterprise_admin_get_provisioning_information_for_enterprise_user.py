import dataclasses
from typing import Optional
from ..shared import scim_enterprise_user as shared_scim_enterprise_user


@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest:
    path_params: EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_user: Optional[shared_scim_enterprise_user.ScimEnterpriseUser] = dataclasses.field(default=None)
    
