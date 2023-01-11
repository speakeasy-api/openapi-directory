import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceinfo as shared_instanceinfo


@dataclass_json
@dataclasses.dataclass
class BatchGetOnPremisesInstancesOutput:
    r"""BatchGetOnPremisesInstancesOutput
    Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
    """
    
    instance_infos: Optional[list[shared_instanceinfo.InstanceInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceInfos') }})
    
