import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_allof_0_properties_snapshots_items as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_allof_0_properties_snapshots_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDropletAssociatedResourcesPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletAssociatedResources200ApplicationJSONSnapshots:
    r"""ListDropletAssociatedResources200ApplicationJSONSnapshots
    An objects containing information about a resource associated with a Droplet.
    """
    
    cost: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletAssociatedResources200ApplicationJSON:
    snapshots: Optional[list[ListDropletAssociatedResources200ApplicationJSONSnapshots]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshots') }})
    volume_snapshots: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_allof_0_properties_snapshots_items.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume_snapshots') }})
    volumes: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1destroy_with_associated_resources_get_responses_200_content_application_1json_schema_allof_0_properties_snapshots_items.Onev21droplets1Percent7BdropletIDPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletAssociatedResources401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDropletAssociatedResourcesRequest:
    path_params: ListDropletAssociatedResourcesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDropletAssociatedResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_droplet_associated_resources_200_application_json_object: Optional[ListDropletAssociatedResources200ApplicationJSON] = dataclasses.field(default=None)
    list_droplet_associated_resources_401_application_json_object: Optional[ListDropletAssociatedResources401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
