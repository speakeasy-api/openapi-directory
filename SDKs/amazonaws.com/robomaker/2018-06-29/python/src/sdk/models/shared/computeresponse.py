import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComputeResponse:
    r"""ComputeResponse
    Compute information for the simulation job
    """
    
    simulation_unit_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationUnitLimit') }})
    
