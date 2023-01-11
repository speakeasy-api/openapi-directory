import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateMonitorPathParams:
    monitor_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMonitorRequestBodyMonitorSchedule:
    cron: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cron') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMonitorRequestBodyMonitor:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schedule: Optional[UpdateMonitorRequestBodyMonitorSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMonitorRequestBody:
    monitor: Optional[UpdateMonitorRequestBodyMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMonitor200ApplicationJSONMonitor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateMonitor200ApplicationJSON:
    monitor: Optional[UpdateMonitor200ApplicationJSONMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclasses.dataclass
class UpdateMonitorRequest:
    path_params: UpdateMonitorPathParams = dataclasses.field()
    request: Optional[UpdateMonitorRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateMonitorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_monitor_200_application_json_object: Optional[UpdateMonitor200ApplicationJSON] = dataclasses.field(default=None)
    
