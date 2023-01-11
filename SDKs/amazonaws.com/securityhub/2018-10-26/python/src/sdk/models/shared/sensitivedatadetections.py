import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occurrences as shared_occurrences


@dataclass_json
@dataclasses.dataclass
class SensitiveDataDetections:
    r"""SensitiveDataDetections
    The list of detected instances of sensitive data.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    occurrences: Optional[shared_occurrences.Occurrences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Occurrences') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
