import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StopGameSessionPlacementInput:
    r"""StopGameSessionPlacementInput
    Represents the input for a request operation.
    """
    
    placement_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementId') }})
    
