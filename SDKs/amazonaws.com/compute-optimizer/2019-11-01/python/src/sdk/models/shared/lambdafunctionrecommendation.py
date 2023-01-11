import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionrecommendationfinding_enum as shared_lambdafunctionrecommendationfinding_enum
from ..shared import lambdafunctionrecommendationfindingreasoncode_enum as shared_lambdafunctionrecommendationfindingreasoncode_enum
from ..shared import lambdafunctionmemoryrecommendationoption as shared_lambdafunctionmemoryrecommendationoption
from ..shared import lambdafunctionutilizationmetric as shared_lambdafunctionutilizationmetric


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionRecommendation:
    r"""LambdaFunctionRecommendation
    Describes an Lambda function recommendation.
    """
    
    account_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    current_memory_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentMemorySize') }})
    finding: Optional[shared_lambdafunctionrecommendationfinding_enum.LambdaFunctionRecommendationFindingEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    finding_reason_codes: Optional[list[shared_lambdafunctionrecommendationfindingreasoncode_enum.LambdaFunctionRecommendationFindingReasonCodeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingReasonCodes') }})
    function_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionArn') }})
    function_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functionVersion') }})
    last_refresh_timestamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRefreshTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lookback_period_in_days: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lookbackPeriodInDays') }})
    memory_size_recommendation_options: Optional[list[shared_lambdafunctionmemoryrecommendationoption.LambdaFunctionMemoryRecommendationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memorySizeRecommendationOptions') }})
    number_of_invocations: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfInvocations') }})
    utilization_metrics: Optional[list[shared_lambdafunctionutilizationmetric.LambdaFunctionUtilizationMetric]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationMetrics') }})
    
