import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items as shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListFirewallsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls200ApplicationJSONMeta:
    r"""ListFirewalls200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls200ApplicationJSON:
    meta: ListFirewalls200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    firewalls: Optional[list[shared_onev2_1droplets_1percent_7bdroplet_idpercent_7d_1firewalls_get_responses_200_content_application_1json_schema_allof_0_properties_firewalls_items.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firewalls') }})
    links: Optional[ListFirewalls200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFirewalls401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListFirewallsRequest:
    query_params: ListFirewallsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListFirewallsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_firewalls_200_application_json_object: Optional[ListFirewalls200ApplicationJSON] = dataclasses.field(default=None)
    list_firewalls_401_application_json_object: Optional[ListFirewalls401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
