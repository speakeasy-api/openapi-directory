import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import difference as shared_difference


@dataclass_json
@dataclasses.dataclass
class GetDifferencesOutput:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    differences: Optional[list[shared_difference.Difference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('differences') }})
    
