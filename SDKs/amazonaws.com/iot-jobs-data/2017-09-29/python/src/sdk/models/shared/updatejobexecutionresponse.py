import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobexecutionstate as shared_jobexecutionstate


@dataclass_json
@dataclasses.dataclass
class UpdateJobExecutionResponse:
    execution_state: Optional[shared_jobexecutionstate.JobExecutionState] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionState') }})
    job_document: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDocument') }})
    
