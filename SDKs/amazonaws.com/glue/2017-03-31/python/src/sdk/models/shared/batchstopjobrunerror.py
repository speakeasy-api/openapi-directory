import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errordetail as shared_errordetail


@dataclass_json
@dataclasses.dataclass
class BatchStopJobRunError:
    r"""BatchStopJobRunError
    Records an error that occurred when attempting to stop a specified job run.
    """
    
    error_detail: Optional[shared_errordetail.ErrorDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    job_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobName') }})
    job_run_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobRunId') }})
    
