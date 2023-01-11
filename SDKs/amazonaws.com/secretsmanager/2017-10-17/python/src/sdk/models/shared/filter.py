import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filternamestringtype_enum as shared_filternamestringtype_enum


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    Allows you to add filters when you use the search function in Secrets Manager.
    """
    
    key: Optional[shared_filternamestringtype_enum.FilterNameStringTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
