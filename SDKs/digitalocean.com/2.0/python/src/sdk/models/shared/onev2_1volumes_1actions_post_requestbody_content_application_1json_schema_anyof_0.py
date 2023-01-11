import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum

class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum(str, Enum):
    ATTACH = "attach"
    DETACH = "detach"
    RESIZE = "resize"


@dataclass_json
@dataclasses.dataclass
class Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0:
    droplet_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('droplet_id') }})
    type: Onev21volumes1actionsPostRequestBodyContentApplication1jsonSchemaAnyOf0TypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    region: Optional[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_regions_items_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
