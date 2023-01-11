import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1:
    db: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    mode: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    connection: Optional[Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    private_connection: Optional[Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_connection') }})
    
