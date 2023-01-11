import dataclasses
from typing import Optional


@dataclasses.dataclass
class Instance:
    r"""Instance
    The ID of an EC2 instance.
    """
    
    instance_id: Optional[str] = dataclasses.field(default=None)
    
