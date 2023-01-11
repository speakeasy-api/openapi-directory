import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DeleteMonitorPathParams:
    monitor_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMonitor200ApplicationJSONMonitor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMonitor200ApplicationJSON:
    monitor: Optional[DeleteMonitor200ApplicationJSONMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMonitor404ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class DeleteMonitor404ApplicationJSON:
    error: Optional[DeleteMonitor404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class DeleteMonitorRequest:
    path_params: DeleteMonitorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteMonitorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_monitor_200_application_json_object: Optional[DeleteMonitor200ApplicationJSON] = dataclasses.field(default=None)
    delete_monitor_404_application_json_object: Optional[DeleteMonitor404ApplicationJSON] = dataclasses.field(default=None)
    
