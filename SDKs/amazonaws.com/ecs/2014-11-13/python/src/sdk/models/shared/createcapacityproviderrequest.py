import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroupprovider as shared_autoscalinggroupprovider
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateCapacityProviderRequest:
    auto_scaling_group_provider: shared_autoscalinggroupprovider.AutoScalingGroupProvider = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupProvider') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
