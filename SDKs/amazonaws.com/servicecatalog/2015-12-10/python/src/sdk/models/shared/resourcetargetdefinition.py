import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceattribute_enum as shared_resourceattribute_enum
from ..shared import requiresrecreation_enum as shared_requiresrecreation_enum


@dataclass_json
@dataclasses.dataclass
class ResourceTargetDefinition:
    r"""ResourceTargetDefinition
    Information about a change to a resource attribute.
    """
    
    attribute: Optional[shared_resourceattribute_enum.ResourceAttributeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    requires_recreation: Optional[shared_requiresrecreation_enum.RequiresRecreationEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequiresRecreation') }})
    
