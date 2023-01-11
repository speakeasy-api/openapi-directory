import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import occurrences as shared_occurrences


@dataclass_json
@dataclasses.dataclass
class CustomDetection:
    r"""CustomDetection
    Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
    """
    
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    occurrences: Optional[shared_occurrences.Occurrences] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrences') }})
    
