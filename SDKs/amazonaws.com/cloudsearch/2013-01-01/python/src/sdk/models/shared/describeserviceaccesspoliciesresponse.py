import dataclasses
from ..shared import accesspoliciesstatus as shared_accesspoliciesstatus


@dataclasses.dataclass
class DescribeServiceAccessPoliciesResponse:
    r"""DescribeServiceAccessPoliciesResponse
    The result of a <code>DescribeServiceAccessPolicies</code> request.
    """
    
    access_policies: shared_accesspoliciesstatus.AccessPoliciesStatus = dataclasses.field()
    
