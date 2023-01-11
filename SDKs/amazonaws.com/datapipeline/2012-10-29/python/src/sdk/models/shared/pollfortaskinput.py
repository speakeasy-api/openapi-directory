import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instanceidentity as shared_instanceidentity


@dataclass_json
@dataclasses.dataclass
class PollForTaskInput:
    r"""PollForTaskInput
    Contains the parameters for PollForTask.
    """
    
    worker_group: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerGroup') }})
    hostname: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    instance_identity: Optional[shared_instanceidentity.InstanceIdentity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceIdentity') }})
    
