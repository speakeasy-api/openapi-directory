import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributetype_enum as shared_attributetype_enum


@dataclass_json
@dataclasses.dataclass
class AttributeDimension:
    attribute_type: Optional[shared_attributetype_enum.AttributeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
