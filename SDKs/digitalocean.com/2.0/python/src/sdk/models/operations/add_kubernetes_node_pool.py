import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1kubernetes_1clusters_get_responses_200_content_application_1json_schema_allof_0_properties_kubernetes_clusters_items_properties_node_pools_items as shared_onev2_1kubernetes_1clusters_get_responses_200_content_application_1json_schema_allof_0_properties_kubernetes_clusters_items_properties_node_pools_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class AddKubernetesNodePoolPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddKubernetesNodePool401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AddKubernetesNodePoolRequest:
    path_params: AddKubernetesNodePoolPathParams = dataclasses.field()
    request: shared_onev2_1kubernetes_1clusters_get_responses_200_content_application_1json_schema_allof_0_properties_kubernetes_clusters_items_properties_node_pools_items.Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesNodePoolsItemsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddKubernetesNodePoolResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_kubernetes_node_pool_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    add_kubernetes_node_pool_401_application_json_object: Optional[AddKubernetesNodePool401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
