import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items as shared_onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class PatchVpcPathParams:
    vpc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vpc_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchVpcRequestBody:
    default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchVpc200ApplicationJSON:
    vpc: Optional[shared_onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchVpc401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PatchVpcRequest:
    path_params: PatchVpcPathParams = dataclasses.field()
    request: PatchVpcRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchVpcResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_vpc_200_application_json_object: Optional[PatchVpc200ApplicationJSON] = dataclasses.field(default=None)
    patch_vpc_401_application_json_object: Optional[PatchVpc401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
