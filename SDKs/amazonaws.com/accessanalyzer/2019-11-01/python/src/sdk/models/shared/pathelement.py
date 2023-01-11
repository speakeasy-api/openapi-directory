import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import substring as shared_substring


@dataclass_json
@dataclasses.dataclass
class PathElement:
    r"""PathElement
    A single element in a path through the JSON representation of a policy.
    """
    
    index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    substring: Optional[shared_substring.Substring] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substring') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
