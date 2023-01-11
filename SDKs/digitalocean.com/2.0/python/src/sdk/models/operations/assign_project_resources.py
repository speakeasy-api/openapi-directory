import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items as shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class AssignProjectResourcesPathParams:
    project_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class AssignProjectResourcesRequestBody:
    resources: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignProjectResources200ApplicationJSON:
    resources: Optional[list[shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items.Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignProjectResources401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AssignProjectResourcesRequest:
    path_params: AssignProjectResourcesPathParams = dataclasses.field()
    request: AssignProjectResourcesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssignProjectResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    assign_project_resources_200_application_json_object: Optional[AssignProjectResources200ApplicationJSON] = dataclasses.field(default=None)
    assign_project_resources_401_application_json_object: Optional[AssignProjectResources401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
