import dataclasses
from typing import Optional


@dataclasses.dataclass
class ServiceEndpoint:
    r"""ServiceEndpoint
    The endpoint to which service requests can be submitted.
    """
    
    endpoint: Optional[str] = dataclasses.field(default=None)
    
