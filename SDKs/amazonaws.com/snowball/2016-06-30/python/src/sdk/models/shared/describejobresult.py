import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import jobmetadata as shared_jobmetadata


@dataclass_json
@dataclasses.dataclass
class DescribeJobResult:
    job_metadata: Optional[shared_jobmetadata.JobMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobMetadata') }})
    sub_job_metadata: Optional[list[shared_jobmetadata.JobMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubJobMetadata') }})
    
