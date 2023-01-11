import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items as shared_onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items


@dataclass_json
@dataclasses.dataclass
class Onev21appsPostResponses200ContentApplication1jsonSchema:
    app: Optional[shared_onev2_1apps_get_responses_200_content_application_1json_schema_properties_apps_items.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('app') }})
    
