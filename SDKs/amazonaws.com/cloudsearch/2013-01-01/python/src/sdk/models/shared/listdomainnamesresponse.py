import dataclasses
from typing import Optional


@dataclasses.dataclass
class ListDomainNamesResponse:
    r"""ListDomainNamesResponse
    The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
    """
    
    domain_names: Optional[dict[str, str]] = dataclasses.field(default=None)
    
