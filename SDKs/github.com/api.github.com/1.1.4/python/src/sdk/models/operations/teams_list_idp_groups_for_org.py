import dataclasses
from typing import Optional
from ..shared import group_mapping as shared_group_mapping


@dataclasses.dataclass
class TeamsListIdpGroupsForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListIdpGroupsForOrgQueryParams:
    page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TeamsListIdpGroupsForOrgRequest:
    path_params: TeamsListIdpGroupsForOrgPathParams = dataclasses.field()
    query_params: TeamsListIdpGroupsForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListIdpGroupsForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    group_mapping: Optional[shared_group_mapping.GroupMapping] = dataclasses.field(default=None)
    
