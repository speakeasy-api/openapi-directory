import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items as shared_onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UpdateVpcPathParams:
    vpc_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vpc_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateVpcRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateVpc200ApplicationJSON:
    vpc: Optional[shared_onev2_1vpcs_get_responses_200_content_application_1json_schema_allof_0_properties_vpcs_items.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpc') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateVpc401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateVpcRequest:
    path_params: UpdateVpcPathParams = dataclasses.field()
    request: UpdateVpcRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateVpcResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_vpc_200_application_json_object: Optional[UpdateVpc200ApplicationJSON] = dataclasses.field(default=None)
    update_vpc_401_application_json_object: Optional[UpdateVpc401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
