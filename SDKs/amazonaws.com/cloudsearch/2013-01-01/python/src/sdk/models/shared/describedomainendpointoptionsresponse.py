import dataclasses
from typing import Optional
from ..shared import domainendpointoptionsstatus as shared_domainendpointoptionsstatus


@dataclasses.dataclass
class DescribeDomainEndpointOptionsResponse:
    r"""DescribeDomainEndpointOptionsResponse
    The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. 
    """
    
    domain_endpoint_options: Optional[shared_domainendpointoptionsstatus.DomainEndpointOptionsStatus] = dataclasses.field(default=None)
    
