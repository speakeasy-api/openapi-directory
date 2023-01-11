import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import group_mapping as shared_group_mapping


@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups:
    group_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody:
    groups: list[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBodyGroups] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsInOrgPathParams = dataclasses.field()
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsInOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsInOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    group_mapping: Optional[shared_group_mapping.GroupMapping] = dataclasses.field(default=None)
    
