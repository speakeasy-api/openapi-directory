import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import destinationtype_enum as shared_destinationtype_enum
from ..shared import targettype_enum as shared_targettype_enum


@dataclass_json
@dataclasses.dataclass
class Route:
    r"""Route
    Describes a route in a route table.
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    destination_type: Optional[shared_destinationtype_enum.DestinationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationType') }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Target') }})
    target_type: Optional[shared_targettype_enum.TargetTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
