import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization_simple as shared_organization_simple


@dataclasses.dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON:
    organizations: list[shared_organization_simple.OrganizationSimple] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizations') }})
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclasses.dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest:
    path_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON] = dataclasses.field(default=None)
    
