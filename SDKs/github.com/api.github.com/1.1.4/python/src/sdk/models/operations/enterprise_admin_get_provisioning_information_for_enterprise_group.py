import dataclasses
from typing import Optional
from ..shared import scim_enterprise_group as shared_scim_enterprise_group


@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams:
    excluded_attributes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludedAttributes', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest:
    path_params: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams = dataclasses.field()
    query_params: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_group: Optional[shared_scim_enterprise_group.ScimEnterpriseGroup] = dataclasses.field(default=None)
    
