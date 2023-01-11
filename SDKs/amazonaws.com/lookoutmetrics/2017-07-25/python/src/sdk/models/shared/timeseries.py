import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionnamevalue as shared_dimensionnamevalue


@dataclass_json
@dataclasses.dataclass
class TimeSeries:
    r"""TimeSeries
    Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
    """
    
    dimension_list: list[shared_dimensionnamevalue.DimensionNameValue] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    metric_value_list: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricValueList') }})
    time_series_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesId') }})
    
