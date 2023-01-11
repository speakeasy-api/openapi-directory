import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tabledataimportjobstatus_enum as shared_tabledataimportjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class StartTableDataImportJobResult:
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_status: shared_tabledataimportjobstatus_enum.TableDataImportJobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    
