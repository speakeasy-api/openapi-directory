import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import faileditemerrorcode_enum as shared_faileditemerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class FailedItemDetails:
    failure_code: Optional[shared_faileditemerrorcode_enum.FailedItemErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureCode') }})
    retryable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryable') }})
    
