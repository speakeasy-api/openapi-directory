import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingthresholds as shared_autoscalingthresholds


@dataclass_json
@dataclasses.dataclass
class LoadBasedAutoScalingConfiguration:
    r"""LoadBasedAutoScalingConfiguration
    Describes a layer's load-based auto scaling configuration.
    """
    
    down_scaling: Optional[shared_autoscalingthresholds.AutoScalingThresholds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DownScaling') }})
    enable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enable') }})
    layer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerId') }})
    up_scaling: Optional[shared_autoscalingthresholds.AutoScalingThresholds] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpScaling') }})
    
