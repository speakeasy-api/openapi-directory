import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancestatus_enum as shared_instancestatus_enum
from ..shared import instancetype_enum as shared_instancetype_enum


@dataclass_json
@dataclasses.dataclass
class ListDeploymentInstancesInput:
    r"""ListDeploymentInstancesInput
     Represents the input of a <code>ListDeploymentInstances</code> operation. 
    """
    
    deployment_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    instance_status_filter: Optional[list[shared_instancestatus_enum.InstanceStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceStatusFilter') }})
    instance_type_filter: Optional[list[shared_instancetype_enum.InstanceTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTypeFilter') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
