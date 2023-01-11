import dataclasses
from typing import Optional
from ..shared import actions_billing_usage as shared_actions_billing_usage


@dataclasses.dataclass
class BillingGetGithubActionsBillingOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingOrgRequest:
    path_params: BillingGetGithubActionsBillingOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubActionsBillingOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    actions_billing_usage: Optional[shared_actions_billing_usage.ActionsBillingUsage] = dataclasses.field(default=None)
    
