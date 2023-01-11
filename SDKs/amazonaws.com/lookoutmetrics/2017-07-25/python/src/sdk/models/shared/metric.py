import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import aggregationfunction_enum as shared_aggregationfunction_enum


@dataclass_json
@dataclasses.dataclass
class Metric:
    r"""Metric
    A calculation made by contrasting a measure and a dimension from your source data.
    """
    
    aggregation_function: shared_aggregationfunction_enum.AggregationFunctionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AggregationFunction') }})
    metric_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    namespace: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    
