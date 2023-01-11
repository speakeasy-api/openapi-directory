import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetOnPremisesInstanceInput:
    r"""GetOnPremisesInstanceInput
     Represents the input of a <code>GetOnPremisesInstance</code> operation. 
    """
    
    instance_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    
