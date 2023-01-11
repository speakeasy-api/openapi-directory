import dataclasses
from typing import Optional
from ..shared import actions_billing_usage as shared_actions_billing_usage


@dataclasses.dataclass
class BillingGetGithubActionsBillingUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingUserRequest:
    path_params: BillingGetGithubActionsBillingUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_billing_usage: Optional[shared_actions_billing_usage.ActionsBillingUsage] = dataclasses.field(default=None)
    
