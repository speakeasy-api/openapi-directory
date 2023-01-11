import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PatchTokenPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchTokenRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclasses.dataclass
class PatchTokenRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    channel: Optional[PatchTokenRequestBodyChannelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    driver: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    physical_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchToken201ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PatchTokenRequest:
    path_params: PatchTokenPathParams = dataclasses.field()
    request: PatchTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchTokenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_token_201_application_json_object: Optional[PatchToken201ApplicationJSON] = dataclasses.field(default=None)
    
