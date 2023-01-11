import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostTokensRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclasses.dataclass
class PostTokensRequestBody:
    active: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    channel: PostTokensRequestBodyChannelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    driver: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    physical_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalId') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostTokens201ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PostTokensRequest:
    request: PostTokensRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostTokensResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_tokens_201_application_json_object: Optional[PostTokens201ApplicationJSON] = dataclasses.field(default=None)
    
