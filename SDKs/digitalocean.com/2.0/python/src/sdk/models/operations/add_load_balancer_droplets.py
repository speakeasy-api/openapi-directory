import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1load_balancers_post_requestbody_content_application_1json_schema_oneof_0_allof_0 as shared_onev2_1load_balancers_post_requestbody_content_application_1json_schema_oneof_0_allof_0
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class AddLoadBalancerDropletsPathParams:
    lb_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lb_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AddLoadBalancerDroplets401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AddLoadBalancerDropletsRequest:
    path_params: AddLoadBalancerDropletsPathParams = dataclasses.field()
    request: shared_onev2_1load_balancers_post_requestbody_content_application_1json_schema_oneof_0_allof_0.Onev21loadBalancersPostRequestBodyContentApplication1jsonSchemaOneOf0AllOf0 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddLoadBalancerDropletsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    add_load_balancer_droplets_401_application_json_object: Optional[AddLoadBalancerDroplets401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
