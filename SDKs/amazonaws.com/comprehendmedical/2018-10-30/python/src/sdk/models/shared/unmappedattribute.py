import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attribute as shared_attribute
from ..shared import entitytype_enum as shared_entitytype_enum


@dataclass_json
@dataclasses.dataclass
class UnmappedAttribute:
    r"""UnmappedAttribute
     An attribute that we extracted, but were unable to relate to an entity. 
    """
    
    attribute: Optional[shared_attribute.Attribute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attribute') }})
    type: Optional[shared_entitytype_enum.EntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
