import dataclasses
from typing import Optional
from ..shared import combined_billing_usage as shared_combined_billing_usage


@dataclasses.dataclass
class BillingGetSharedStorageBillingOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetSharedStorageBillingOrgRequest:
    path_params: BillingGetSharedStorageBillingOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetSharedStorageBillingOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    combined_billing_usage: Optional[shared_combined_billing_usage.CombinedBillingUsage] = dataclasses.field(default=None)
    
