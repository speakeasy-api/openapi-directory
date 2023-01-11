import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testcaserun as shared_testcaserun


@dataclass_json
@dataclasses.dataclass
class GroupResult:
    r"""GroupResult
    Show Group Result.
    """
    
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    tests: Optional[list[shared_testcaserun.TestCaseRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tests') }})
    
