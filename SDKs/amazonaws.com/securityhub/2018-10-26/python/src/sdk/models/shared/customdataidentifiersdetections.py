import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occurrences as shared_occurrences


@dataclass_json
@dataclasses.dataclass
class CustomDataIdentifiersDetections:
    r"""CustomDataIdentifiersDetections
    The list of detected instances of sensitive data.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    occurrences: Optional[shared_occurrences.Occurrences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Occurrences') }})
    
