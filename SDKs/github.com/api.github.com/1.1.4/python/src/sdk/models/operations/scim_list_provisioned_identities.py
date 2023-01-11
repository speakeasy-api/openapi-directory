import dataclasses
from typing import Optional
from ..shared import scim_error as shared_scim_error
from ..shared import scim_user_list as shared_scim_user_list


@dataclasses.dataclass
class ScimListProvisionedIdentitiesPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScimListProvisionedIdentitiesQueryParams:
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ScimListProvisionedIdentitiesRequest:
    path_params: ScimListProvisionedIdentitiesPathParams = dataclasses.field()
    query_params: ScimListProvisionedIdentitiesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ScimListProvisionedIdentitiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    scim_user_list: Optional[shared_scim_user_list.ScimUserList] = dataclasses.field(default=None)
    
