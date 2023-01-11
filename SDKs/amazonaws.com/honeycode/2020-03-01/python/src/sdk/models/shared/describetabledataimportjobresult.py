import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tabledataimportjobmetadata as shared_tabledataimportjobmetadata
from ..shared import tabledataimportjobstatus_enum as shared_tabledataimportjobstatus_enum


@dataclass_json
@dataclasses.dataclass
class DescribeTableDataImportJobResult:
    job_metadata: shared_tabledataimportjobmetadata.TableDataImportJobMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobMetadata') }})
    job_status: shared_tabledataimportjobstatus_enum.TableDataImportJobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobStatus') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
