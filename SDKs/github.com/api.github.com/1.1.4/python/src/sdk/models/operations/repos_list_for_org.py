import dataclasses
from typing import Optional
from enum import Enum
from ..shared import org_enum6 as shared_org_enum6
from ..shared import org_enum5 as shared_org_enum5
from ..shared import org_enum4 as shared_org_enum4
from ..shared import minimal_repository as shared_minimal_repository


@dataclasses.dataclass
class ReposListForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListForOrgQueryParams:
    direction: Optional[shared_org_enum6.OrgEnum6] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_org_enum5.OrgEnum5] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[shared_org_enum4.OrgEnum4] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListForOrgRequest:
    path_params: ReposListForOrgPathParams = dataclasses.field()
    query_params: ReposListForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    minimal_repositories: Optional[list[shared_minimal_repository.MinimalRepository]] = dataclasses.field(default=None)
    
