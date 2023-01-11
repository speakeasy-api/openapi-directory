import dataclasses
from typing import Optional
from ..shared import group_mapping as shared_group_mapping


@dataclasses.dataclass
class TeamsListIdpGroupsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListIdpGroupsInOrgRequest:
    path_params: TeamsListIdpGroupsInOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListIdpGroupsInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_mapping: Optional[shared_group_mapping.GroupMapping] = dataclasses.field(default=None)
    
