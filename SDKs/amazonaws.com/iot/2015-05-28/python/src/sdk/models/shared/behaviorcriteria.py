import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import comparisonoperator_enum as shared_comparisonoperator_enum
from ..shared import machinelearningdetectionconfig as shared_machinelearningdetectionconfig
from ..shared import statisticalthreshold as shared_statisticalthreshold
from ..shared import metricvalue as shared_metricvalue


@dataclass_json
@dataclasses.dataclass
class BehaviorCriteria:
    r"""BehaviorCriteria
    The criteria by which the behavior is determined to be normal.
    """
    
    comparison_operator: Optional[shared_comparisonoperator_enum.ComparisonOperatorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonOperator') }})
    consecutive_datapoints_to_alarm: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutiveDatapointsToAlarm') }})
    consecutive_datapoints_to_clear: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consecutiveDatapointsToClear') }})
    duration_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationSeconds') }})
    ml_detection_config: Optional[shared_machinelearningdetectionconfig.MachineLearningDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mlDetectionConfig') }})
    statistical_threshold: Optional[shared_statisticalthreshold.StatisticalThreshold] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticalThreshold') }})
    value: Optional[shared_metricvalue.MetricValue] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
