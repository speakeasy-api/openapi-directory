import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiongroup as shared_dimensiongroup


@dataclass_json
@dataclasses.dataclass
class MetricQuery:
    r"""MetricQuery
    A single query to be processed. You must provide the metric to query. If no other parameters are specified, Performance Insights returns all of the data points for that metric. You can optionally request that the data points be aggregated by dimension group ( <code>GroupBy</code>), and return only those data points that match your criteria (<code>Filter</code>).
    """
    
    metric: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metric') }})
    filter: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    group_by: Optional[shared_dimensiongroup.DimensionGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupBy') }})
    
