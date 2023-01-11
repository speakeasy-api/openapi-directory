import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import usagereportsubscription as shared_usagereportsubscription


@dataclass_json
@dataclasses.dataclass
class DescribeUsageReportSubscriptionsResult:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    usage_report_subscriptions: Optional[list[shared_usagereportsubscription.UsageReportSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageReportSubscriptions') }})
    
