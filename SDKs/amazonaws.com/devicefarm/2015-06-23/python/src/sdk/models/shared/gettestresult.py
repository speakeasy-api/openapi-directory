import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import test as shared_test


@dataclass_json
@dataclasses.dataclass
class GetTestResult:
    r"""GetTestResult
    Represents the result of a get test request.
    """
    
    test: Optional[shared_test.Test] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    
