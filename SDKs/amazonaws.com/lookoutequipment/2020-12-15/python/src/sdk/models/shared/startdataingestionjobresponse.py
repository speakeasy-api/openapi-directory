import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ingestionjobstatus_enum as shared_ingestionjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class StartDataIngestionJobResponse:
    job_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    status: Optional[shared_ingestionjobstatus_enum.IngestionJobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
