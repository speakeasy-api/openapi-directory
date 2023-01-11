import dataclasses
from typing import Optional
from ..shared import domainstatus as shared_domainstatus


@dataclasses.dataclass
class DeleteDomainResponse:
    r"""DeleteDomainResponse
    A response message that contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
    """
    
    domain_status: Optional[shared_domainstatus.DomainStatus] = dataclasses.field(default=None)
    
