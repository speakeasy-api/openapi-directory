import dataclasses
from ..shared import domainstatus as shared_domainstatus


@dataclasses.dataclass
class DescribeDomainsResponse:
    r"""DescribeDomainsResponse
    The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
    """
    
    domain_status_list: list[shared_domainstatus.DomainStatus] = dataclasses.field()
    
