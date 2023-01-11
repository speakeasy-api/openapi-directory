import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1kubernetes_1clusters_1percent_7bcluster_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_properties_load_balancers_items as shared_onev2_1kubernetes_1clusters_1percent_7bcluster_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_properties_load_balancers_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListKubernetesAssociatedResourcesPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListKubernetesAssociatedResources200ApplicationJSON:
    r"""ListKubernetesAssociatedResources200ApplicationJSON
    An object containing the IDs of resources associated with a Kubernetes cluster.
    """
    
    load_balancers: Optional[list[ListKubernetesAssociatedResources200ApplicationJSONLoadBalancers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    volume_snapshots: Optional[list[shared_onev2_1kubernetes_1clusters_1percent_7bcluster_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_properties_load_balancers_items.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_snapshots') }})
    volumes: Optional[list[shared_onev2_1kubernetes_1clusters_1percent_7bcluster_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_properties_load_balancers_items.Onev21kubernetes1clusters1Percent7BclusterIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListKubernetesAssociatedResources401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListKubernetesAssociatedResourcesRequest:
    path_params: ListKubernetesAssociatedResourcesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListKubernetesAssociatedResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_kubernetes_associated_resources_200_application_json_object: Optional[ListKubernetesAssociatedResources200ApplicationJSON] = dataclasses.field(default=None)
    list_kubernetes_associated_resources_401_application_json_object: Optional[ListKubernetesAssociatedResources401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
