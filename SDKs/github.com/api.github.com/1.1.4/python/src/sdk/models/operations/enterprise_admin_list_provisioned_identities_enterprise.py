import dataclasses
from typing import Optional
from ..shared import scim_user_list_enterprise as shared_scim_user_list_enterprise


@dataclasses.dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest:
    path_params: EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams = dataclasses.field()
    query_params: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_user_list_enterprise: Optional[shared_scim_user_list_enterprise.ScimUserListEnterprise] = dataclasses.field(default=None)
    
