import dataclasses
from typing import Optional
from ..shared import apppkgsubscription as shared_apppkgsubscription
from ..shared import apppkgsubscriptioninfo as shared_apppkgsubscriptioninfo
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class SubscriptionsPostRequest:
    request: shared_apppkgsubscription.AppPkgSubscription = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SubscriptionsPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_subscription_info: Optional[shared_apppkgsubscriptioninfo.AppPkgSubscriptionInfo] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
