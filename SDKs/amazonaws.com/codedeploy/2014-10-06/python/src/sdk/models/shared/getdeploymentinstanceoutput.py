import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancesummary as shared_instancesummary


@dataclass_json
@dataclasses.dataclass
class GetDeploymentInstanceOutput:
    r"""GetDeploymentInstanceOutput
     Represents the output of a <code>GetDeploymentInstance</code> operation. 
    """
    
    instance_summary: Optional[shared_instancesummary.InstanceSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceSummary') }})
    
