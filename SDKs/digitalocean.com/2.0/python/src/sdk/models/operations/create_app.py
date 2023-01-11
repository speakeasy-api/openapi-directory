import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec
from ..shared import onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items as shared_onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class CreateAppRequestBody:
    spec: shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateApp200ApplicationJSON:
    app: Optional[shared_onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateApp401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateAppRequest:
    request: CreateAppRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAppResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_app_200_application_json_object: Optional[CreateApp200ApplicationJSON] = dataclasses.field(default=None)
    create_app_401_application_json_object: Optional[CreateApp401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
