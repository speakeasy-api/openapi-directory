import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagfiltertype_enum as shared_tagfiltertype_enum


@dataclass_json
@dataclasses.dataclass
class TagFilter:
    r"""TagFilter
    Information about an on-premises instance tag filter.
    """
    
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    type: Optional[shared_tagfiltertype_enum.TagFilterTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
