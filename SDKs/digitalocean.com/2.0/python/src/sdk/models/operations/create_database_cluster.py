import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items as shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateDatabaseClusterRequestBodyBackupRestore:
    database_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database_name') }})
    backup_created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class CreateDatabaseClusterRequestBodyEngineEnum(str, Enum):
    PG = "pg"
    MYSQL = "mysql"
    REDIS = "redis"
    MONGODB = "mongodb"


@dataclass_json
@dataclasses.dataclass
class CreateDatabaseClusterRequestBodyMaintenanceWindowInput:
    day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    hour: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatabaseClusterRequestBodyInput:
    engine: CreateDatabaseClusterRequestBodyEngineEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    num_nodes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_nodes') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    backup_restore: Optional[CreateDatabaseClusterRequestBodyBackupRestore] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup_restore') }})
    maintenance_window: Optional[CreateDatabaseClusterRequestBodyMaintenanceWindowInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance_window') }})
    private_network_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_network_uuid') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatabaseCluster201ApplicationJSON:
    database: shared_onev2_1databases_get_responses_200_content_application_1json_schema_properties_databases_items.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDatabaseCluster401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateDatabaseClusterRequest:
    request: CreateDatabaseClusterRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDatabaseClusterResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_database_cluster_201_application_json_object: Optional[CreateDatabaseCluster201ApplicationJSON] = dataclasses.field(default=None)
    create_database_cluster_401_application_json_object: Optional[CreateDatabaseCluster401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
