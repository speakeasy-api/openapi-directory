import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fleetaction_enum as shared_fleetaction_enum


@dataclass_json
@dataclasses.dataclass
class StopFleetActionsInput:
    r"""StopFleetActionsInput
    Represents the input for a request operation.
    """
    
    actions: list[shared_fleetaction_enum.FleetActionEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
