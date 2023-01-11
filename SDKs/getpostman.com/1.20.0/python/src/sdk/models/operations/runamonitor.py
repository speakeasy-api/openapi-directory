import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class RunAMonitorPathParams:
    monitor_uid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'monitor_uid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsItem:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequestBody:
    content_length: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLength') }})
    mode: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders:
    accept: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accept') }})
    accept_encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accept-encoding') }})
    content_length: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-length') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsRequest:
    body: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequestBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    headers: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequestHeaders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponseBody:
    content_length: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLength') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders:
    connection: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    content_encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-encoding') }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content-type') }})
    date_: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    transfer_encoding: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer-encoding') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutionsResponse:
    body: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponseBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    code: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    headers: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponseHeaders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    response_size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseSize') }})
    response_time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseTime') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunExecutions:
    id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[RunAMonitor200ApplicationJSONRunExecutionsItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    request: Optional[RunAMonitor200ApplicationJSONRunExecutionsRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: Optional[RunAMonitor200ApplicationJSONRunExecutionsResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunFailuresAssertion:
    status_code_is_400: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status code is 400') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunFailures:
    assertion: Optional[RunAMonitor200ApplicationJSONRunFailuresAssertion] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assertion') }})
    execution_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunInfo:
    collection_uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionUid') }})
    finished_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishedAt') }})
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    monitor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitorId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    started_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunStatsAssertions:
    failed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunStatsRequests:
    failed: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    total: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRunStats:
    assertions: Optional[RunAMonitor200ApplicationJSONRunStatsAssertions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assertions') }})
    requests: Optional[RunAMonitor200ApplicationJSONRunStatsRequests] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSONRun:
    executions: Optional[list[RunAMonitor200ApplicationJSONRunExecutions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    failures: Optional[list[RunAMonitor200ApplicationJSONRunFailures]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    info: Optional[RunAMonitor200ApplicationJSONRunInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    stats: Optional[RunAMonitor200ApplicationJSONRunStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    

@dataclass_json
@dataclasses.dataclass
class RunAMonitor200ApplicationJSON:
    run: Optional[RunAMonitor200ApplicationJSONRun] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    

@dataclasses.dataclass
class RunAMonitorRequest:
    path_params: RunAMonitorPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RunAMonitorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    run_a_monitor_200_application_json_object: Optional[RunAMonitor200ApplicationJSON] = dataclasses.field(default=None)
    
