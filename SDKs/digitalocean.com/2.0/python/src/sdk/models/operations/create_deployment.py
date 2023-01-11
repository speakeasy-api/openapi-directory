import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class CreateDeploymentPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeploymentRequestBody:
    force_build: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('force_build') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeployment200ApplicationJSON:
    deployment: Optional[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateDeployment401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = dataclasses.field()
    request: CreateDeploymentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDeploymentResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_deployment_200_application_json_object: Optional[CreateDeployment200ApplicationJSON] = dataclasses.field(default=None)
    create_deployment_401_application_json_object: Optional[CreateDeployment401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
