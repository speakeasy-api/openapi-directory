import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComputeCapacity:
    r"""ComputeCapacity
    Describes the capacity for a fleet.
    """
    
    desired_instances: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInstances') }})
    
