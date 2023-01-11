import dataclasses
from typing import Optional
from ..shared import apppkgsubscriptioninfo as shared_apppkgsubscriptioninfo
from ..shared import problemdetails as shared_problemdetails


@dataclasses.dataclass
class IndividualSubscriptionGetPathParams:
    subscription_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class IndividualSubscriptionGetRequest:
    path_params: IndividualSubscriptionGetPathParams = dataclasses.field()
    

@dataclasses.dataclass
class IndividualSubscriptionGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    app_pkg_subscription_info: Optional[shared_apppkgsubscriptioninfo.AppPkgSubscriptionInfo] = dataclasses.field(default=None)
    problem_details: Optional[shared_problemdetails.ProblemDetails] = dataclasses.field(default=None)
    
