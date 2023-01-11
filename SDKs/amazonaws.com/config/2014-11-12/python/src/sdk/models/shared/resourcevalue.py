import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcevaluetype_enum as shared_resourcevaluetype_enum


@dataclass_json
@dataclasses.dataclass
class ResourceValue:
    r"""ResourceValue
    The dynamic value of the resource.
    """
    
    value: shared_resourcevaluetype_enum.ResourceValueTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
