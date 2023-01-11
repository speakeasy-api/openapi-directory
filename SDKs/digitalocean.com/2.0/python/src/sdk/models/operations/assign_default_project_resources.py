import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items as shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items
from ..shared import onev2_1projects_1percent_7bproject_idpercent_7d_1resources_post_requestbody_content_application_1json_schema as shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_post_requestbody_content_application_1json_schema
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class AssignDefaultProjectResources200ApplicationJSON:
    resources: Optional[list[shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_get_responses_200_content_application_1json_schema_allof_0_properties_resources_items.Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignDefaultProjectResources401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class AssignDefaultProjectResourcesRequest:
    request: shared_onev2_1projects_1percent_7bproject_idpercent_7d_1resources_post_requestbody_content_application_1json_schema.Onev21projects1Percent7BprojectIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AssignDefaultProjectResourcesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    assign_default_project_resources_200_application_json_object: Optional[AssignDefaultProjectResources200ApplicationJSON] = dataclasses.field(default=None)
    assign_default_project_resources_401_application_json_object: Optional[AssignDefaultProjectResources401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
