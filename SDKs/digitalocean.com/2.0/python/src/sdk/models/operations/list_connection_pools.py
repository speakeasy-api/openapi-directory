import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListConnectionPoolsPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPools200ApplicationJSONPoolsConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPools200ApplicationJSONPoolsPrivateConnection:
    database: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    host: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('host') }})
    password: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    ssl: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    user: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPools200ApplicationJSONPools:
    db: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    mode: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    user: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    connection: Optional[ListConnectionPools200ApplicationJSONPoolsConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection') }})
    private_connection: Optional[ListConnectionPools200ApplicationJSONPoolsPrivateConnection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_connection') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPools200ApplicationJSON:
    pools: Optional[list[ListConnectionPools200ApplicationJSONPools]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pools') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConnectionPools401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListConnectionPoolsRequest:
    path_params: ListConnectionPoolsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListConnectionPoolsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_connection_pools_200_application_json_object: Optional[ListConnectionPools200ApplicationJSON] = dataclasses.field(default=None)
    list_connection_pools_401_application_json_object: Optional[ListConnectionPools401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
