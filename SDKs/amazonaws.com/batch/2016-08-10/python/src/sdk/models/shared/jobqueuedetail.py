import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeenvironmentorder as shared_computeenvironmentorder
from ..shared import jqstate_enum as shared_jqstate_enum
from ..shared import jqstatus_enum as shared_jqstatus_enum


@dataclass_json
@dataclasses.dataclass
class JobQueueDetail:
    r"""JobQueueDetail
    An object representing the details of an Batch job queue.
    """
    
    compute_environment_order: list[shared_computeenvironmentorder.ComputeEnvironmentOrder] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentOrder') }})
    job_queue_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueArn') }})
    job_queue_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobQueueName') }})
    priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    state: shared_jqstate_enum.JqStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[shared_jqstatus_enum.JqStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
