import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import metricbenchmark as shared_metricbenchmark
from ..shared import metricdistribution as shared_metricdistribution


@dataclass_json
@dataclasses.dataclass
class Metric:
    r"""Metric
    This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
    """
    
    benchmark: Optional[shared_metricbenchmark.MetricBenchmark] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmark') }})
    distributions: Optional[list[shared_metricdistribution.MetricDistribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributions') }})
    metric_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricKey') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
