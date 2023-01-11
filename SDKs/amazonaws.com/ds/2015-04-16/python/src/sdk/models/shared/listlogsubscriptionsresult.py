import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import logsubscription as shared_logsubscription


@dataclass_json
@dataclasses.dataclass
class ListLogSubscriptionsResult:
    log_subscriptions: Optional[list[shared_logsubscription.LogSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LogSubscriptions') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
