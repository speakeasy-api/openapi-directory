import dataclasses
from ..shared import accesspoliciesstatus as shared_accesspoliciesstatus


@dataclasses.dataclass
class DescribeServiceAccessPoliciesResponse:
    r"""DescribeServiceAccessPoliciesResponse
    A response message that contains the access policies for a domain.
    """
    
    access_policies: shared_accesspoliciesstatus.AccessPoliciesStatus = dataclasses.field()
    
