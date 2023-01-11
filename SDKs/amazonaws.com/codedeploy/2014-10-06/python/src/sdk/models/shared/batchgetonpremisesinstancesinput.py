import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetOnPremisesInstancesInput:
    r"""BatchGetOnPremisesInstancesInput
    Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
    """
    
    instance_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    
