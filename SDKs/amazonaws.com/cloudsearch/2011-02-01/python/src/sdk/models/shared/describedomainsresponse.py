import dataclasses
from ..shared import domainstatus as shared_domainstatus


@dataclasses.dataclass
class DescribeDomainsResponse:
    r"""DescribeDomainsResponse
    A response message that contains the status of one or more domains.
    """
    
    domain_status_list: list[shared_domainstatus.DomainStatus] = dataclasses.field()
    
