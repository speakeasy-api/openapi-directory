import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagereportexecutionerrorcode_enum as shared_usagereportexecutionerrorcode_enum


@dataclass_json
@dataclasses.dataclass
class LastReportGenerationExecutionError:
    r"""LastReportGenerationExecutionError
    Describes the error that is returned when a usage report can't be generated.
    """
    
    error_code: Optional[shared_usagereportexecutionerrorcode_enum.UsageReportExecutionErrorCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorCode') }})
    error_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    
