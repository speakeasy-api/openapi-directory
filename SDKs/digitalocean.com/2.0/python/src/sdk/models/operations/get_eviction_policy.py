import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetEvictionPolicyPathParams:
    database_cluster_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    
class GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum(str, Enum):
    NOEVICTION = "noeviction"
    ALLKEYS_LRU = "allkeys_lru"
    ALLKEYS_RANDOM = "allkeys_random"
    VOLATILE_LRU = "volatile_lru"
    VOLATILE_RANDOM = "volatile_random"
    VOLATILE_TTL = "volatile_ttl"


@dataclass_json
@dataclasses.dataclass
class GetEvictionPolicy200ApplicationJSON:
    eviction_policy: GetEvictionPolicy200ApplicationJSONEvictionPolicyEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eviction_policy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetEvictionPolicy401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetEvictionPolicyRequest:
    path_params: GetEvictionPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEvictionPolicyResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_eviction_policy_200_application_json_object: Optional[GetEvictionPolicy200ApplicationJSON] = dataclasses.field(default=None)
    get_eviction_policy_401_application_json_object: Optional[GetEvictionPolicy401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
