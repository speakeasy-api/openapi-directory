import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items as shared_onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetFloatingIPPathParams:
    floating_ip: str = dataclasses.field(metadata={'path_param': { 'field_name': 'floating_ip', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIP200ApplicationJSON:
    floating_ip: Optional[shared_onev2_1floating_ips_get_responses_200_content_application_1json_schema_allof_0_properties_floating_ips_items.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIP401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetFloatingIPRequest:
    path_params: GetFloatingIPPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFloatingIPResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_floating_ip_200_application_json_object: Optional[GetFloatingIP200ApplicationJSON] = dataclasses.field(default=None)
    get_floating_ip_401_application_json_object: Optional[GetFloatingIP401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
