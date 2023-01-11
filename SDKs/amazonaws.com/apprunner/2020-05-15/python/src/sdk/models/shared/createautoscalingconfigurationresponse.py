import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingconfiguration as shared_autoscalingconfiguration


@dataclass_json
@dataclasses.dataclass
class CreateAutoScalingConfigurationResponse:
    auto_scaling_configuration: shared_autoscalingconfiguration.AutoScalingConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfiguration') }})
    
