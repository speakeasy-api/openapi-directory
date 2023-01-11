import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1cdn_1endpoints_get_responses_200_content_application_1json_schema_allof_0_properties_endpoints_items as shared_onev2_1cdn_1endpoints_get_responses_200_content_application_1json_schema_allof_0_properties_endpoints_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateCdnEndpoint401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateCdnEndpointRequest:
    request: shared_onev2_1cdn_1endpoints_get_responses_200_content_application_1json_schema_allof_0_properties_endpoints_items.Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItemsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCdnEndpointResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_cdn_endpoint_201_application_json_any: Optional[Any] = dataclasses.field(default=None)
    create_cdn_endpoint_401_application_json_object: Optional[CreateCdnEndpoint401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
