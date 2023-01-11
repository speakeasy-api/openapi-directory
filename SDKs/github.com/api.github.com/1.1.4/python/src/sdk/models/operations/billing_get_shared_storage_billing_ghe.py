import dataclasses
from typing import Optional
from ..shared import combined_billing_usage as shared_combined_billing_usage


@dataclasses.dataclass
class BillingGetSharedStorageBillingGhePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetSharedStorageBillingGheRequest:
    path_params: BillingGetSharedStorageBillingGhePathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetSharedStorageBillingGheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    combined_billing_usage: Optional[shared_combined_billing_usage.CombinedBillingUsage] = dataclasses.field(default=None)
    
