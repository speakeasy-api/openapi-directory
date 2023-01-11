import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum(str, Enum):
    PG = "pg"
    MYSQL = "mysql"
    REDIS = "redis"
    MONGODB = "mongodb"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow:
    day: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    hour: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    description: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    pending: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum(str, Enum):
    CREATING = "creating"
    ONLINE = "online"
    RESIZING = "resizing"
    MIGRATING = "migrating"
    FORKING = "forking"

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_plugin') }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum(str, Enum):
    PRIMARY = "primary"
    NORMAL = "normal"


@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    mysql_settings: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysql_settings') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    role: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems:
    engine: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    num_nodes: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_nodes') }})
    region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    connection: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    db_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db_names') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    maintenance_window: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenance_window') }})
    private_connection: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_connection') }})
    private_network_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_network_uuid') }})
    status: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    users: Optional[list[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
