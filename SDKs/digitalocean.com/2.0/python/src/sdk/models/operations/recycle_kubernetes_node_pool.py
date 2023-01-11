import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class RecycleKubernetesNodePoolPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    node_pool_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'node_pool_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class RecycleKubernetesNodePool401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class RecycleKubernetesNodePoolRequest:
    path_params: RecycleKubernetesNodePoolPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RecycleKubernetesNodePoolResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    recycle_kubernetes_node_pool_401_application_json_object: Optional[RecycleKubernetesNodePool401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
