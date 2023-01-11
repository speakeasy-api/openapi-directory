import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubnetOutpost:
    r"""SubnetOutpost
    The ID of the outpost subnet.
    """
    
    subnet_outpost_arn: Optional[str] = dataclasses.field(default=None)
    
