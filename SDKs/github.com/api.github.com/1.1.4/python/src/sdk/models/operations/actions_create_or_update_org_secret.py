import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ActionsCreateOrUpdateOrgSecretPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    secret_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'secret_name', 'style': 'simple', 'explode': False }})
    
class ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum(str, Enum):
    ALL = "all"
    PRIVATE = "private"
    SELECTED = "selected"


@dataclass_json
@dataclasses.dataclass
class ActionsCreateOrUpdateOrgSecretRequestBody:
    encrypted_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encrypted_value') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key_id') }})
    selected_repository_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    visibility: Optional[ActionsCreateOrUpdateOrgSecretRequestBodyVisibilityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateOrgSecretRequest:
    path_params: ActionsCreateOrUpdateOrgSecretPathParams = dataclasses.field()
    request: Optional[ActionsCreateOrUpdateOrgSecretRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActionsCreateOrUpdateOrgSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
