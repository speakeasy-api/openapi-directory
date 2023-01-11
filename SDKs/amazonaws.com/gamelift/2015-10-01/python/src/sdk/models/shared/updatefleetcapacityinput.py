import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateFleetCapacityInput:
    r"""UpdateFleetCapacityInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    desired_instances: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInstances') }})
    location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    max_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSize') }})
    min_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSize') }})
    
