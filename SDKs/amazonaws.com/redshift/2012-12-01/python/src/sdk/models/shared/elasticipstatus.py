import dataclasses
from typing import Optional


@dataclasses.dataclass
class ElasticIPStatus:
    r"""ElasticIPStatus
    Describes the status of the elastic IP (EIP) address.
    """
    
    elastic_ip: Optional[str] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    
