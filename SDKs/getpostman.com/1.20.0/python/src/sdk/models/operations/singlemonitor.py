import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SingleMonitorPathParams:
    monitor_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions:
    failed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests:
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorLastRunStats:
    assertions: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStatsAssertions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assertions') }})
    requests: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStatsRequests] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorLastRun:
    finished_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedAt') }})
    started_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    stats: Optional[SingleMonitor200ApplicationJSONMonitorLastRunStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorNotificationsOnError:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure:
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorNotifications:
    on_error: Optional[list[SingleMonitor200ApplicationJSONMonitorNotificationsOnError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onError') }})
    on_failure: Optional[list[SingleMonitor200ApplicationJSONMonitorNotificationsOnFailure]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onFailure') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorOptions:
    follow_redirects: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followRedirects') }})
    request_delay: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDelay') }})
    request_timeout: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestTimeout') }})
    strict_ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strictSSL') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitorSchedule:
    cron: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cron') }})
    next_run: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRun') }})
    timezone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSONMonitor:
    collection_uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionUid') }})
    distribution: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    environment_uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentUid') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_run: Optional[SingleMonitor200ApplicationJSONMonitorLastRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRun') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: Optional[SingleMonitor200ApplicationJSONMonitorNotifications] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    options: Optional[SingleMonitor200ApplicationJSONMonitorOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    owner: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    schedule: Optional[SingleMonitor200ApplicationJSONMonitorSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor200ApplicationJSON:
    monitor: Optional[SingleMonitor200ApplicationJSONMonitor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor404ApplicationJSONError:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class SingleMonitor404ApplicationJSON:
    error: Optional[SingleMonitor404ApplicationJSONError] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclasses.dataclass
class SingleMonitorRequest:
    path_params: SingleMonitorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class SingleMonitorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    single_monitor_200_application_json_object: Optional[SingleMonitor200ApplicationJSON] = dataclasses.field(default=None)
    single_monitor_404_application_json_object: Optional[SingleMonitor404ApplicationJSON] = dataclasses.field(default=None)
    
