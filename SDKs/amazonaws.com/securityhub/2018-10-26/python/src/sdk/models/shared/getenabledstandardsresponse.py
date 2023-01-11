import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardssubscription as shared_standardssubscription


@dataclass_json
@dataclasses.dataclass
class GetEnabledStandardsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    standards_subscriptions: Optional[list[shared_standardssubscription.StandardsSubscription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardsSubscriptions') }})
    
