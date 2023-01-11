import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import group_mapping as shared_group_mapping


@dataclasses.dataclass
class TeamsListIdpGroupsForLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TeamsListIdpGroupsForLegacyRequest:
    path_params: TeamsListIdpGroupsForLegacyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TeamsListIdpGroupsForLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    group_mapping: Optional[shared_group_mapping.GroupMapping] = dataclasses.field(default=None)
    
