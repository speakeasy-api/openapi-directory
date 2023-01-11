import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cloudwatchdimensionconfiguration as shared_cloudwatchdimensionconfiguration


@dataclass_json
@dataclasses.dataclass
class CloudWatchDestination:
    r"""CloudWatchDestination
    An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
    """
    
    dimension_configurations: list[shared_cloudwatchdimensionconfiguration.CloudWatchDimensionConfiguration] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionConfigurations') }})
    
