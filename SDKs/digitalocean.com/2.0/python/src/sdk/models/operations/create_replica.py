import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1replicas_get_responses_200_content_application_1json_schema_properties_replicas_items as shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1replicas_get_responses_200_content_application_1json_schema_properties_replicas_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class CreateReplicaPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateReplicaRequestBodyInput:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    private_network_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_network_uuid') }})
    region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateReplica201ApplicationJSONOutput:
    replica: Optional[shared_onev2_1databases_1percent_7bdatabase_cluster_uuidpercent_7d_1replicas_get_responses_200_content_application_1json_schema_properties_replicas_items.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replica') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateReplica401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateReplicaRequest:
    path_params: CreateReplicaPathParams = dataclasses.field()
    request: Optional[CreateReplicaRequestBodyInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateReplicaResponseOutput:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_replica_201_application_json_object: Optional[CreateReplica201ApplicationJSONOutput] = dataclasses.field(default=None)
    create_replica_401_application_json_object: Optional[CreateReplica401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
