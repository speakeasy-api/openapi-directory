import dataclasses
from typing import Optional
from ..shared import actions_billing_usage as shared_actions_billing_usage


@dataclasses.dataclass
class BillingGetGithubActionsBillingGhePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingGheRequest:
    path_params: BillingGetGithubActionsBillingGhePathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingGheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_billing_usage: Optional[shared_actions_billing_usage.ActionsBillingUsage] = dataclasses.field(default=None)
    
