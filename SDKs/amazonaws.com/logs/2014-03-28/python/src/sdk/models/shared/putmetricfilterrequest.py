import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metrictransformation as shared_metrictransformation


@dataclass_json
@dataclasses.dataclass
class PutMetricFilterRequest:
    filter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterName') }})
    filter_pattern: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterPattern') }})
    log_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    metric_transformations: list[shared_metrictransformation.MetricTransformation] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricTransformations') }})
    
