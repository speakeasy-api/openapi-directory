import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CloudwatchMetricAction:
    r"""CloudwatchMetricAction
    Describes an action that captures a CloudWatch metric.
    """
    
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    metric_namespace: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricNamespace') }})
    metric_unit: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricUnit') }})
    metric_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricValue') }})
    role_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    metric_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTimestamp') }})
    
