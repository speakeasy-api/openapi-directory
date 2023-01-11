import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PostFloatingIPActionPathParams:
    floating_ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'floating_ip', 'style': 'simple', 'explode': False }})
    
class PostFloatingIPActionRequestBody1TypeEnum(str, Enum):
    ASSIGN = "assign"
    UNASSIGN = "unassign"


@dataclass_json
@dataclasses.dataclass
class PostFloatingIPActionRequestBody1:
    type: PostFloatingIPActionRequestBody1TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class PostFloatingIPActionRequestBody2TypeEnum(str, Enum):
    ASSIGN = "assign"
    UNASSIGN = "unassign"


@dataclass_json
@dataclasses.dataclass
class PostFloatingIPActionRequestBody2:
    droplet_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    type: PostFloatingIPActionRequestBody2TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFloatingIPAction401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PostFloatingIPActionRequest:
    path_params: PostFloatingIPActionPathParams = dataclasses.field()
    request: Optional[Any] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFloatingIPActionResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    post_floating_ip_action_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    post_floating_ip_action_401_application_json_object: Optional[PostFloatingIPAction401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
