import dataclasses
from typing import Optional
from ..shared import apppkgsubscriptionlinklist as shared_apppkgsubscriptionlinklist
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class SubscriptionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_subscription_link_list: Optional[shared_apppkgsubscriptionlinklist.AppPkgSubscriptionLinkList] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
