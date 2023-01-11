import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"


@dataclass_json
@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsPathParams = dataclasses.field()
    request: Optional[TeamsAddOrUpdateRepoPermissionsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TeamsAddOrUpdateRepoPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
