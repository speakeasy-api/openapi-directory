import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupresult as shared_groupresult


@dataclass_json
@dataclasses.dataclass
class TestResult:
    r"""TestResult
    Show each group result.
    """
    
    groups: Optional[list[shared_groupresult.GroupResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
