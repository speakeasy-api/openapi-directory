import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetMonitorRelationsPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    api_version_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiVersionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetMonitorRelations200ApplicationJSONMonitor:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    monitor_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitorId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMonitorRelations200ApplicationJSON:
    monitor: Optional[list[GetMonitorRelations200ApplicationJSONMonitor]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitor') }})
    

@dataclasses.dataclass
class GetMonitorRelationsRequest:
    path_params: GetMonitorRelationsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMonitorRelationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_monitor_relations_200_application_json_object: Optional[GetMonitorRelations200ApplicationJSON] = dataclasses.field(default=None)
    
