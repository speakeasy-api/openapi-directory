import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDatabaseBackupsPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListDatabaseBackups200ApplicationJSONBackups:
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    size_gigabytes: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size_gigabytes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDatabaseBackups200ApplicationJSON:
    backups: list[ListDatabaseBackups200ApplicationJSONBackups] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDatabaseBackups401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDatabaseBackupsRequest:
    path_params: ListDatabaseBackupsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDatabaseBackupsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_database_backups_200_application_json_object: Optional[ListDatabaseBackups200ApplicationJSON] = dataclasses.field(default=None)
    list_database_backups_401_application_json_object: Optional[ListDatabaseBackups401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
