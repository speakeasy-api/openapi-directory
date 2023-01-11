import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import suite as shared_suite


@dataclass_json
@dataclasses.dataclass
class GetSuiteResult:
    r"""GetSuiteResult
    Represents the result of a get suite request.
    """
    
    suite: Optional[shared_suite.Suite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suite') }})
    
