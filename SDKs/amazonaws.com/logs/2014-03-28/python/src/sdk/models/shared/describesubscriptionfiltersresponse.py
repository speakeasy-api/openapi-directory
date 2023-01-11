import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionfilter as shared_subscriptionfilter


@dataclass_json
@dataclasses.dataclass
class DescribeSubscriptionFiltersResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    subscription_filters: Optional[list[shared_subscriptionfilter.SubscriptionFilter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionFilters') }})
    
