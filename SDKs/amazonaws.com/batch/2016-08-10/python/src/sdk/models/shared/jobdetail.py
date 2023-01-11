import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import arraypropertiesdetail as shared_arraypropertiesdetail
from ..shared import attemptdetail as shared_attemptdetail
from ..shared import containerdetail as shared_containerdetail
from ..shared import jobdependency as shared_jobdependency
from ..shared import nodedetails as shared_nodedetails
from ..shared import nodeproperties as shared_nodeproperties
from ..shared import platformcapability_enum as shared_platformcapability_enum
from ..shared import retrystrategy as shared_retrystrategy
from ..shared import jobstatus_enum as shared_jobstatus_enum
from ..shared import jobtimeout as shared_jobtimeout


@dataclass_json
@dataclasses.dataclass
class JobDetail:
    r"""JobDetail
    An object representing an Batch job.
    """
    
    job_definition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinition') }})
    job_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    job_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_queue: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueue') }})
    started_at: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedAt') }})
    status: shared_jobstatus_enum.JobStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    array_properties: Optional[shared_arraypropertiesdetail.ArrayPropertiesDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arrayProperties') }})
    attempts: Optional[list[shared_attemptdetail.AttemptDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    container: Optional[shared_containerdetail.ContainerDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    created_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    depends_on: Optional[list[shared_jobdependency.JobDependency]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependsOn') }})
    job_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    node_details: Optional[shared_nodedetails.NodeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeDetails') }})
    node_properties: Optional[shared_nodeproperties.NodeProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeProperties') }})
    parameters: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    platform_capabilities: Optional[list[shared_platformcapability_enum.PlatformCapabilityEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformCapabilities') }})
    propagate_tags: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propagateTags') }})
    retry_strategy: Optional[shared_retrystrategy.RetryStrategy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryStrategy') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    stopped_at: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stoppedAt') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout: Optional[shared_jobtimeout.JobTimeout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeout') }})
    
