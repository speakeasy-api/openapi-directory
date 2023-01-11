import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtertype_enum as shared_filtertype_enum


@dataclass_json
@dataclasses.dataclass
class FilterRule:
    r"""FilterRule
    Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
    """
    
    filter_type: Optional[shared_filtertype_enum.FilterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterType') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
