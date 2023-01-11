import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import computeresource as shared_computeresource
from ..shared import cestate_enum as shared_cestate_enum
from ..shared import cestatus_enum as shared_cestatus_enum
from ..shared import cetype_enum as shared_cetype_enum


@dataclass_json
@dataclasses.dataclass
class ComputeEnvironmentDetail:
    r"""ComputeEnvironmentDetail
    An object representing an Batch compute environment.
    """
    
    compute_environment_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentArn') }})
    compute_environment_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEnvironmentName') }})
    ecs_cluster_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsClusterArn') }})
    compute_resources: Optional[shared_computeresource.ComputeResource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeResources') }})
    service_role: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRole') }})
    state: Optional[shared_cestate_enum.CeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[shared_cestatus_enum.CeStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReason') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[shared_cetype_enum.CeTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
