import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datapoint as shared_datapoint
from ..shared import responseresourcemetrickey as shared_responseresourcemetrickey


@dataclass_json
@dataclasses.dataclass
class MetricKeyDataPoints:
    r"""MetricKeyDataPoints
    A time-ordered series of data points, corresponding to a dimension of a Performance Insights metric.
    """
    
    data_points: Optional[list[shared_datapoint.DataPoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataPoints') }})
    key: Optional[shared_responseresourcemetrickey.ResponseResourceMetricKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
