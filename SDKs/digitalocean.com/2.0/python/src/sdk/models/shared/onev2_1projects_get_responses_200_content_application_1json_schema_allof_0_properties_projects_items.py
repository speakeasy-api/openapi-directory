import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum(str, Enum):
    DEVELOPMENT = "Development"
    STAGING = "Staging"
    PRODUCTION = "Production"


@dataclass_json
@dataclasses.dataclass
class Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsInput:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    environment: Optional[Onev21projectsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesProjectsItemsEnvironmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    is_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    purpose: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    
