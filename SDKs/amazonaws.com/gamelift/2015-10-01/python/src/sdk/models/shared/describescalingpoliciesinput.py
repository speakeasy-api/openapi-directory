import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scalingstatustype_enum as shared_scalingstatustype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeScalingPoliciesInput:
    r"""DescribeScalingPoliciesInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    status_filter: Optional[shared_scalingstatustype_enum.ScalingStatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusFilter') }})
    
