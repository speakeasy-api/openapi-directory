import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finding_enum as shared_finding_enum
from ..shared import instancerecommendationfindingreasoncode_enum as shared_instancerecommendationfindingreasoncode_enum
from ..shared import instancerecommendationoption as shared_instancerecommendationoption
from ..shared import recommendationsource as shared_recommendationsource
from ..shared import utilizationmetric as shared_utilizationmetric


@dataclass_json
@dataclasses.dataclass
class InstanceRecommendation:
    r"""InstanceRecommendation
    Describes an Amazon EC2 instance recommendation.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentInstanceType') }})
    finding: Optional[shared_finding_enum.FindingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    finding_reason_codes: Optional[list[shared_instancerecommendationfindingreasoncode_enum.InstanceRecommendationFindingReasonCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingReasonCodes') }})
    instance_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceArn') }})
    instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    last_refresh_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    recommendation_options: Optional[list[shared_instancerecommendationoption.InstanceRecommendationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationOptions') }})
    recommendation_sources: Optional[list[shared_recommendationsource.RecommendationSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationSources') }})
    utilization_metrics: Optional[list[shared_utilizationmetric.UtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
