import dataclasses
from typing import Optional
from ..shared import packages_billing_usage as shared_packages_billing_usage


@dataclasses.dataclass
class BillingGetGithubPackagesBillingOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingOrgRequest:
    path_params: BillingGetGithubPackagesBillingOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class BillingGetGithubPackagesBillingOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    packages_billing_usage: Optional[shared_packages_billing_usage.PackagesBillingUsage] = dataclasses.field(default=None)
    
