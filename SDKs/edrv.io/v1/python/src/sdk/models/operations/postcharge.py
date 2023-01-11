import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PostChargePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostChargeRequestBodyActionEnum(str, Enum):
    START = "START"
    STOP = "STOP"


@dataclass_json
@dataclasses.dataclass
class PostChargeRequestBody:
    action: PostChargeRequestBodyActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass_json
@dataclasses.dataclass
class PostCharge200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PostChargeRequest:
    path_params: PostChargePathParams = dataclasses.field()
    request: PostChargeRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostChargeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_charge_200_application_json_object: Optional[PostCharge200ApplicationJSON] = dataclasses.field(default=None)
    
