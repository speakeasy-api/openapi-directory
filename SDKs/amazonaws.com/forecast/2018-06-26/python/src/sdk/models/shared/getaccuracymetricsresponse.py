import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import automloverridestrategy_enum as shared_automloverridestrategy_enum
from ..shared import optimizationmetric_enum as shared_optimizationmetric_enum
from ..shared import evaluationresult as shared_evaluationresult


@dataclass_json
@dataclasses.dataclass
class GetAccuracyMetricsResponse:
    auto_ml_override_strategy: Optional[shared_automloverridestrategy_enum.AutoMlOverrideStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoMLOverrideStrategy') }})
    optimization_metric: Optional[shared_optimizationmetric_enum.OptimizationMetricEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OptimizationMetric') }})
    predictor_evaluation_results: Optional[list[shared_evaluationresult.EvaluationResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PredictorEvaluationResults') }})
    
