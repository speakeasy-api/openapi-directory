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
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum(str, Enum):
    CREATING = "creating"
    ONLINE = "online"
    RESIZING = "resizing"
    MIGRATING = "migrating"
    FORKING = "forking"


@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    connection: Optional[Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    created_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    private_connection: Optional[Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_connection') }})
    private_network_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_network_uuid') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    status: Optional[Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
