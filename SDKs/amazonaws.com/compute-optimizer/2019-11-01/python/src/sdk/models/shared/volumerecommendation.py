import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volumeconfiguration as shared_volumeconfiguration
from ..shared import ebsfinding_enum as shared_ebsfinding_enum
from ..shared import ebsutilizationmetric as shared_ebsutilizationmetric
from ..shared import volumerecommendationoption as shared_volumerecommendationoption


@dataclass_json
@dataclasses.dataclass
class VolumeRecommendation:
    r"""VolumeRecommendation
    Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_configuration: Optional[shared_volumeconfiguration.VolumeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentConfiguration') }})
    finding: Optional[shared_ebsfinding_enum.EbsFindingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    last_refresh_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    look_back_period_in_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookBackPeriodInDays') }})
    utilization_metrics: Optional[list[shared_ebsutilizationmetric.EbsUtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    volume_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeArn') }})
    volume_recommendation_options: Optional[list[shared_volumerecommendationoption.VolumeRecommendationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeRecommendationOptions') }})
    
