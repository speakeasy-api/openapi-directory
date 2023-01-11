import dataclasses
from typing import Optional
from ..shared import scim_group_list_enterprise as shared_scim_group_list_enterprise


@dataclasses.dataclass
class EnterpriseAdminListProvisionedGroupsEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    excluded_attributes: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludedAttributes', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseRequest:
    path_params: EnterpriseAdminListProvisionedGroupsEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_group_list_enterprise: Optional[shared_scim_group_list_enterprise.ScimGroupListEnterprise] = dataclasses.field(default=None)
    
