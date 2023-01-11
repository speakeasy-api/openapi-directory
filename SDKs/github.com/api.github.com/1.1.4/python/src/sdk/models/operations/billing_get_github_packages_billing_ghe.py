import dataclasses
from typing import Optional
from ..shared import packages_billing_usage as shared_packages_billing_usage


@dataclasses.dataclass
class BillingGetGithubPackagesBillingGhePathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingGheRequest:
    path_params: BillingGetGithubPackagesBillingGhePathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingGheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    packages_billing_usage: Optional[shared_packages_billing_usage.PackagesBillingUsage] = dataclasses.field(default=None)
    
