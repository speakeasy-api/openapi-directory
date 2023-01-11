import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComputeCapacityStatus:
    r"""ComputeCapacityStatus
    Describes the capacity status for a fleet.
    """
    
    desired: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Desired') }})
    available: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Available') }})
    in_use: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InUse') }})
    running: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Running') }})
    
