import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingthresholds as shared_autoscalingthresholds


@dataclass_json
@dataclasses.dataclass
class SetLoadBasedAutoScalingRequest:
    layer_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    down_scaling: Optional[shared_autoscalingthresholds.AutoScalingThresholds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DownScaling') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enable') }})
    up_scaling: Optional[shared_autoscalingthresholds.AutoScalingThresholds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpScaling') }})
    
