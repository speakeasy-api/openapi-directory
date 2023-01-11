import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute:
    comparison: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparison') }})
    custom_attribute_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_attribute_name') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd:
    custom_attribute: Optional[ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_attribute') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudience:
    and_: Optional[list[ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AND') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBodyRecipients:
    canvas_entry_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_entry_properties') }})
    external_user_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_user_id') }})
    trigger_properties: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_properties') }})
    user_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_alias') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBodySchedule:
    at_optimal_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_optimal_time') }})
    in_local_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_local_time') }})
    time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequestBody:
    audience: Optional[ScheduleAPITriggeredCanvasesRequestBodyAudience] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    broadcast: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcast') }})
    canvas_entry_properties: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_entry_properties') }})
    canvas_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_id') }})
    recipients: Optional[list[ScheduleAPITriggeredCanvasesRequestBodyRecipients]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    schedule: Optional[ScheduleAPITriggeredCanvasesRequestBodySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesRequest:
    request: Optional[ScheduleAPITriggeredCanvasesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScheduleAPITriggeredCanvasesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
