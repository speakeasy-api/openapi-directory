import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import errorreason as shared_errorreason
from ..shared import quotaperiod as shared_quotaperiod
from ..shared import metricinfo as shared_metricinfo


@dataclass_json
@dataclasses.dataclass
class ServiceQuota:
    r"""ServiceQuota
    Information about a quota.
    """
    
    adjustable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Adjustable') }})
    error_reason: Optional[shared_errorreason.ErrorReason] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorReason') }})
    global_quota: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalQuota') }})
    period: Optional[shared_quotaperiod.QuotaPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Period') }})
    quota_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaArn') }})
    quota_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaCode') }})
    quota_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuotaName') }})
    service_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceCode') }})
    service_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceName') }})
    unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    usage_metric: Optional[shared_metricinfo.MetricInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageMetric') }})
    value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
