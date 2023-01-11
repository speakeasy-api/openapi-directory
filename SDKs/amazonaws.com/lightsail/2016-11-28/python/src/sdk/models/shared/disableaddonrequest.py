import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addontype_enum as shared_addontype_enum


@dataclass_json
@dataclasses.dataclass
class DisableAddOnRequest:
    add_on_type: shared_addontype_enum.AddOnTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOnType') }})
    resource_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    
