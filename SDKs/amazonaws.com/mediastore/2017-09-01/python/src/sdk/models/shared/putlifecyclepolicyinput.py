import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PutLifecyclePolicyInput:
    container_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContainerName') }})
    lifecycle_policy: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LifecyclePolicy') }})
    
