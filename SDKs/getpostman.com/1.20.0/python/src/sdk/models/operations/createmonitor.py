import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateMonitorRequestBodyMonitorSchedule:
    cron: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cron') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitorRequestBodyMonitor:
    collection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    environment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schedule: Optional[CreateMonitorRequestBodyMonitorSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitorRequestBody:
    monitor: Optional[CreateMonitorRequestBodyMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitor200ApplicationJSONMonitor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitor200ApplicationJSON:
    monitor: Optional[CreateMonitor200ApplicationJSONMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitor400ApplicationJSONErrorDetails:
    param: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('param') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitor400ApplicationJSONError:
    details: Optional[CreateMonitor400ApplicationJSONErrorDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMonitor400ApplicationJSON:
    error: Optional[CreateMonitor400ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class CreateMonitorRequest:
    request: Optional[CreateMonitorRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMonitorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_monitor_200_application_json_object: Optional[CreateMonitor200ApplicationJSON] = dataclasses.field(default=None)
    create_monitor_400_application_json_object: Optional[CreateMonitor400ApplicationJSON] = dataclasses.field(default=None)
    
