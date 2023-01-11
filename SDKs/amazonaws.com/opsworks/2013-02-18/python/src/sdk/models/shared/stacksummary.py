import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancescount as shared_instancescount


@dataclass_json
@dataclasses.dataclass
class StackSummary:
    r"""StackSummary
    Summarizes the number of layers, instances, and apps in a stack.
    """
    
    apps_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AppsCount') }})
    arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    instances_count: Optional[shared_instancescount.InstancesCount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesCount') }})
    layers_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayersCount') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    stack_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
