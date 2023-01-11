import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errormetric as shared_errormetric
from ..shared import weightedquantileloss as shared_weightedquantileloss


@dataclass_json
@dataclasses.dataclass
class Metrics:
    r"""Metrics
    Provides metrics that are used to evaluate the performance of a predictor. This object is part of the <a>WindowSummary</a> object.
    """
    
    average_weighted_quantile_loss: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AverageWeightedQuantileLoss') }})
    error_metrics: Optional[list[shared_errormetric.ErrorMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMetrics') }})
    rmse: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RMSE') }})
    weighted_quantile_losses: Optional[list[shared_weightedquantileloss.WeightedQuantileLoss]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WeightedQuantileLosses') }})
    
