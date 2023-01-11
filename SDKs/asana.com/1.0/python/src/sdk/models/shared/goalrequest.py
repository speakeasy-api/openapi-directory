import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usercompact as shared_usercompact

class GoalRequestMetricUnitEnum(str, Enum):
    NONE = "none"
    CURRENCY = "currency"
    PERCENTAGE = "percentage"


@dataclass_json
@dataclasses.dataclass
class GoalRequestMetricInput:
    r"""GoalRequestMetricInput
    A generic Asana Resource, containing a globally unique identifier.
    """
    
    currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_code') }})
    current_display_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_display_value') }})
    current_number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_number_value') }})
    initial_number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_number_value') }})
    precision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    target_number_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target_number_value') }})
    unit: Optional[GoalRequestMetricUnitEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclasses.dataclass
class GoalRequestOwnerInput:
    r"""GoalRequestOwnerInput
    A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GoalRequestTeamInput:
    r"""GoalRequestTeamInput
    A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GoalRequestTimePeriodPeriodEnum(str, Enum):
    FY = "FY"
    H1 = "H1"
    H2 = "H2"
    Q1 = "Q1"
    Q2 = "Q2"
    Q3 = "Q3"
    Q4 = "Q4"


@dataclass_json
@dataclasses.dataclass
class GoalRequestTimePeriodInput:
    r"""GoalRequestTimePeriodInput
    A generic Asana Resource, containing a globally unique identifier.
    """
    
    end_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_on') }})
    period: Optional[GoalRequestTimePeriodPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    start_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    

@dataclass_json
@dataclasses.dataclass
class GoalRequestWorkspaceInput:
    r"""GoalRequestWorkspaceInput
    A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
    """
    
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GoalRequestInput:
    r"""GoalRequestInput
    A generic Asana Resource, containing a globally unique identifier.
    """
    
    due_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_on') }})
    followers: Optional[list[shared_usercompact.UserCompactInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    html_notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_notes') }})
    is_workspace_level: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_workspace_level') }})
    liked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    metric: Optional[GoalRequestMetricInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    owner: Optional[GoalRequestOwnerInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner') }})
    start_on: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    team: Optional[GoalRequestTeamInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    time_period: Optional[GoalRequestTimePeriodInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_period') }})
    workspace: Optional[GoalRequestWorkspaceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
