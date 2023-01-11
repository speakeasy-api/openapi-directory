import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricpolicy as shared_metricpolicy


@dataclass_json
@dataclasses.dataclass
class GetMetricPolicyOutput:
    metric_policy: shared_metricpolicy.MetricPolicy = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricPolicy') }})
    
