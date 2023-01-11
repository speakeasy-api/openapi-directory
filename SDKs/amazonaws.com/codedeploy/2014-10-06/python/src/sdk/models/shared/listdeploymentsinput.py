import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timerange as shared_timerange
from ..shared import deploymentstatus_enum as shared_deploymentstatus_enum


@dataclass_json
@dataclasses.dataclass
class ListDeploymentsInput:
    r"""ListDeploymentsInput
    Represents the input of a <code>ListDeployments</code> operation.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationName') }})
    create_time_range: Optional[shared_timerange.TimeRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTimeRange') }})
    deployment_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupName') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    include_only_statuses: Optional[list[shared_deploymentstatus_enum.DeploymentStatusEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOnlyStatuses') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
