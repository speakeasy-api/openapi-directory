import dataclasses
from typing import Optional
from ..shared import packages_billing_usage as shared_packages_billing_usage


@dataclasses.dataclass
class BillingGetGithubPackagesBillingUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingUserRequest:
    path_params: BillingGetGithubPackagesBillingUserPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    packages_billing_usage: Optional[shared_packages_billing_usage.PackagesBillingUsage] = dataclasses.field(default=None)
    
