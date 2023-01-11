import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import device as shared_device
from ..shared import problemdetail as shared_problemdetail
from ..shared import executionresult_enum as shared_executionresult_enum


@dataclass_json
@dataclasses.dataclass
class Problem:
    r"""Problem
    Represents a specific warning or failure.
    """
    
    device: Optional[shared_device.Device] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    job: Optional[shared_problemdetail.ProblemDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    result: Optional[shared_executionresult_enum.ExecutionResultEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    run: Optional[shared_problemdetail.ProblemDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run') }})
    suite: Optional[shared_problemdetail.ProblemDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suite') }})
    test: Optional[shared_problemdetail.ProblemDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    
