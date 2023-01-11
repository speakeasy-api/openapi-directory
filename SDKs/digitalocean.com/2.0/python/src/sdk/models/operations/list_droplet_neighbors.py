import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListDropletNeighborsPathParams:
    droplet_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletNeighbors200ApplicationJSON:
    droplets: Optional[list[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplets') }})
    

@dataclass_json
@dataclasses.dataclass
class ListDropletNeighbors401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListDropletNeighborsRequest:
    path_params: ListDropletNeighborsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDropletNeighborsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_droplet_neighbors_200_application_json_object: Optional[ListDropletNeighbors200ApplicationJSON] = dataclasses.field(default=None)
    list_droplet_neighbors_401_application_json_object: Optional[ListDropletNeighbors401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
