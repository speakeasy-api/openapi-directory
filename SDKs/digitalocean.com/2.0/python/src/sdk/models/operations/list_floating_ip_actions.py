import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items as shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class ListFloatingIPActionsPathParams:
    floating_ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'floating_ip', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions200ApplicationJSONLinksPages1:
    last: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions200ApplicationJSONLinksPages2:
    first: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    prev: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions200ApplicationJSONLinks:
    pages: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions200ApplicationJSONMeta:
    r"""ListFloatingIPActions200ApplicationJSONMeta
    Information about the response itself.
    """
    
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions200ApplicationJSON:
    meta: ListFloatingIPActions200ApplicationJSONMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    actions: Optional[list[shared_onev2_1actions_get_responses_200_content_application_1json_schema_allof_0_properties_actions_items.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    links: Optional[ListFloatingIPActions200ApplicationJSONLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclasses.dataclass
class ListFloatingIPActions401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class ListFloatingIPActionsRequest:
    path_params: ListFloatingIPActionsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListFloatingIPActionsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    list_floating_ip_actions_200_application_json_object: Optional[ListFloatingIPActions200ApplicationJSON] = dataclasses.field(default=None)
    list_floating_ip_actions_401_application_json_object: Optional[ListFloatingIPActions401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
