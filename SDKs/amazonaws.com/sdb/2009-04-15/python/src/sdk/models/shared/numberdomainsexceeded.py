import dataclasses
from typing import Optional


@dataclasses.dataclass
class NumberDomainsExceeded:
    r"""NumberDomainsExceeded
    Too many domains exist per this account.
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
