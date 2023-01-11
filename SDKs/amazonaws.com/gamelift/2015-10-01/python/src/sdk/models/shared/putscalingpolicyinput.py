import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperatortype_enum as shared_comparisonoperatortype_enum
from ..shared import metricname_enum as shared_metricname_enum
from ..shared import policytype_enum as shared_policytype_enum
from ..shared import scalingadjustmenttype_enum as shared_scalingadjustmenttype_enum
from ..shared import targetconfiguration as shared_targetconfiguration


@dataclass_json
@dataclasses.dataclass
class PutScalingPolicyInput:
    r"""PutScalingPolicyInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    metric_name: shared_metricname_enum.MetricNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    comparison_operator: Optional[shared_comparisonoperatortype_enum.ComparisonOperatorTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComparisonOperator') }})
    evaluation_periods: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EvaluationPeriods') }})
    policy_type: Optional[shared_policytype_enum.PolicyTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    scaling_adjustment: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustment') }})
    scaling_adjustment_type: Optional[shared_scalingadjustmenttype_enum.ScalingAdjustmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingAdjustmentType') }})
    target_configuration: Optional[shared_targetconfiguration.TargetConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetConfiguration') }})
    threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Threshold') }})
    
