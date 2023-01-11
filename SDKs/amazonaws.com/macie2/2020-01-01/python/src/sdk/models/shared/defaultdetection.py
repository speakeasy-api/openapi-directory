import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occurrences as shared_occurrences


@dataclass_json
@dataclasses.dataclass
class DefaultDetection:
    r"""DefaultDetection
    Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
    """
    
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    occurrences: Optional[shared_occurrences.Occurrences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
