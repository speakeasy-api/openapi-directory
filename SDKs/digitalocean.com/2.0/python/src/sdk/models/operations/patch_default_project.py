import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1projects_get_responses_200_content_application_1json_schema_allof_0_properties_projects_items as shared_onev2_1projects_get_responses_200_content_application_1json_schema_allof_0_properties_projects_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class PatchDefaultProject401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class PatchDefaultProjectRequest:
    request: shared_onev2_1projects_get_responses_200_content_application_1json_schema_allof_0_properties_projects_items.Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchDefaultProjectResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_default_project_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    patch_default_project_401_application_json_object: Optional[PatchDefaultProject401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
