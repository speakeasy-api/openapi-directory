import dataclasses
from typing import Optional


@dataclasses.dataclass
class CheckDNSAvailabilityResultMessage:
    r"""CheckDNSAvailabilityResultMessage
    Indicates if the specified CNAME is available.
    """
    
    available: Optional[bool] = dataclasses.field(default=None)
    fully_qualified_cname: Optional[str] = dataclasses.field(default=None)
    
