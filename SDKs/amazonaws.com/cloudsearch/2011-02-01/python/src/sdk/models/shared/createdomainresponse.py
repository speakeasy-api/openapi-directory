import dataclasses
from typing import Optional
from ..shared import domainstatus as shared_domainstatus


@dataclasses.dataclass
class CreateDomainResponse:
    r"""CreateDomainResponse
    A response message that contains the status of a newly created domain.
    """
    
    domain_status: Optional[shared_domainstatus.DomainStatus] = dataclasses.field(default=None)
    
