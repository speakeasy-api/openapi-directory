import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobstatus_enum as shared_jobstatus_enum


@dataclass_json
@dataclasses.dataclass
class StartFhirExportJobResponse:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    job_status: shared_jobstatus_enum.JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobStatus') }})
    datastore_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatastoreId') }})
    
