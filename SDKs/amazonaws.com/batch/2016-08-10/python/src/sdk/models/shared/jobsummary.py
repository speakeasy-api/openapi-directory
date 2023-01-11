import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import arraypropertiessummary as shared_arraypropertiessummary
from ..shared import containersummary as shared_containersummary
from ..shared import nodepropertiessummary as shared_nodepropertiessummary
from ..shared import jobstatus_enum as shared_jobstatus_enum


@dataclass_json
@dataclasses.dataclass
class JobSummary:
    r"""JobSummary
    An object representing summary details of a job.
    """
    
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    array_properties: Optional[shared_arraypropertiessummary.ArrayPropertiesSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayProperties') }})
    container: Optional[shared_containersummary.ContainerSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    created_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_definition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinition') }})
    node_properties: Optional[shared_nodepropertiessummary.NodePropertiesSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    started_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: Optional[shared_jobstatus_enum.JobStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    stopped_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt') }})
    
