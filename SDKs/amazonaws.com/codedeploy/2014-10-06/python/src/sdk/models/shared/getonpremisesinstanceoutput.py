import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceinfo as shared_instanceinfo


@dataclass_json
@dataclasses.dataclass
class GetOnPremisesInstanceOutput:
    r"""GetOnPremisesInstanceOutput
     Represents the output of a <code>GetOnPremisesInstance</code> operation. 
    """
    
    instance_info: Optional[shared_instanceinfo.InstanceInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceInfo') }})
    
