import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_distribution_enum as shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_distribution_enum


@dataclass_json
@dataclasses.dataclass
class Onev21imagesPostRequestBodyContentApplication1jsonSchemaAllOf0:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    distribution: Optional[shared_onev2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items_properties_image_properties_distribution_enum.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesDistributionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
