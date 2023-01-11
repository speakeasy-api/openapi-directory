import dataclasses
from typing import Optional
from ..shared import beezup_common_errorresponsemessage as shared_beezup_common_errorresponsemessage
from ..shared import subscriptionindex as shared_subscriptionindex


@dataclasses.dataclass
class GetSubscriptionListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    beez_up_common_error_response_message: Optional[shared_beezup_common_errorresponsemessage.BeezUpCommonErrorResponseMessage] = dataclasses.field(default=None)
    subscription_indices: Optional[list[shared_subscriptionindex.SubscriptionIndex]] = dataclasses.field(default=None)
    
