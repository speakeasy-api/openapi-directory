import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autoscalinggroupconfiguration as shared_autoscalinggroupconfiguration
from ..shared import finding_enum as shared_finding_enum
from ..shared import autoscalinggrouprecommendationoption as shared_autoscalinggrouprecommendationoption
from ..shared import utilizationmetric as shared_utilizationmetric


@dataclass_json
@dataclasses.dataclass
class AutoScalingGroupRecommendation:
    r"""AutoScalingGroupRecommendation
    Describes an Auto Scaling group recommendation.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    auto_scaling_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupArn') }})
    auto_scaling_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupName') }})
    current_configuration: Optional[shared_autoscalinggroupconfiguration.AutoScalingGroupConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentConfiguration') }})
    finding: Optional[shared_finding_enum.FindingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    last_refresh_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    recommendation_options: Optional[list[shared_autoscalinggrouprecommendationoption.AutoScalingGroupRecommendationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationOptions') }})
    utilization_metrics: Optional[list[shared_utilizationmetric.UtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
