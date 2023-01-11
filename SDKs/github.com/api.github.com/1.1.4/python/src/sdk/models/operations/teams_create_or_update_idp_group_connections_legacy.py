import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import basic_error as shared_basic_error
from ..shared import group_mapping as shared_group_mapping
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams:
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups:
    group_description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_description') }})
    group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_id') }})
    group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_name') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody:
    groups: list[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBodyGroups] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    synced_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synced_at') }})
    

@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequest:
    path_params: TeamsCreateOrUpdateIdpGroupConnectionsLegacyPathParams = dataclasses.field()
    request: Optional[TeamsCreateOrUpdateIdpGroupConnectionsLegacyRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsCreateOrUpdateIdpGroupConnectionsLegacyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    group_mapping: Optional[shared_group_mapping.GroupMapping] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
