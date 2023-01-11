import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorinfo as shared_errorinfo


@dataclass_json
@dataclasses.dataclass
class ExecutionResult:
    r"""ExecutionResult
     Specifies the end result of the flow run. 
    """
    
    bytes_processed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesProcessed') }})
    bytes_written: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesWritten') }})
    error_info: Optional[shared_errorinfo.ErrorInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorInfo') }})
    records_processed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordsProcessed') }})
    
