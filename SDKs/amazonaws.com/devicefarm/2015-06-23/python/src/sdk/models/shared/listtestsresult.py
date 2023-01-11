import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import test as shared_test


@dataclass_json
@dataclasses.dataclass
class ListTestsResult:
    r"""ListTestsResult
    Represents the result of a list tests request.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    tests: Optional[list[shared_test.Test]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tests') }})
    
