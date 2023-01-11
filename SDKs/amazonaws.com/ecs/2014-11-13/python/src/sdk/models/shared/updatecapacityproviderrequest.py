import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroupproviderupdate as shared_autoscalinggroupproviderupdate


@dataclass_json
@dataclasses.dataclass
class UpdateCapacityProviderRequest:
    auto_scaling_group_provider: shared_autoscalinggroupproviderupdate.AutoScalingGroupProviderUpdate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupProvider') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
