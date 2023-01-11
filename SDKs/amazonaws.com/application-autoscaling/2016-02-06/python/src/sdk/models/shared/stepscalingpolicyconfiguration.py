import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adjustmenttype_enum as shared_adjustmenttype_enum
from ..shared import metricaggregationtype_enum as shared_metricaggregationtype_enum
from ..shared import stepadjustment as shared_stepadjustment


@dataclass_json
@dataclasses.dataclass
class StepScalingPolicyConfiguration:
    r"""StepScalingPolicyConfiguration
    Represents a step scaling policy configuration to use with Application Auto Scaling.
    """
    
    adjustment_type: Optional[shared_adjustmenttype_enum.AdjustmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdjustmentType') }})
    cooldown: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cooldown') }})
    metric_aggregation_type: Optional[shared_metricaggregationtype_enum.MetricAggregationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricAggregationType') }})
    min_adjustment_magnitude: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinAdjustmentMagnitude') }})
    step_adjustments: Optional[list[shared_stepadjustment.StepAdjustment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepAdjustments') }})
    
