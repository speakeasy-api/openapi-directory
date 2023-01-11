import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalingconfigurationsummary as shared_autoscalingconfigurationsummary


@dataclass_json
@dataclasses.dataclass
class ListAutoScalingConfigurationsResponse:
    auto_scaling_configuration_summary_list: list[shared_autoscalingconfigurationsummary.AutoScalingConfigurationSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingConfigurationSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
