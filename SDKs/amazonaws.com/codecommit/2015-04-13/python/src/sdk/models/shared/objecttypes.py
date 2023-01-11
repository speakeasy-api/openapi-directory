import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import objecttypeenum_enum as shared_objecttypeenum_enum


@dataclass_json
@dataclasses.dataclass
class ObjectTypes:
    r"""ObjectTypes
    Information about the type of an object in a merge operation.
    """
    
    base: Optional[shared_objecttypeenum_enum.ObjectTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    destination: Optional[shared_objecttypeenum_enum.ObjectTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: Optional[shared_objecttypeenum_enum.ObjectTypeEnumEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
