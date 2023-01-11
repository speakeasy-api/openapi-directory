import dataclasses
from typing import Optional


@dataclasses.dataclass
class CustomAmi:
    r"""CustomAmi
    A custom AMI available to platforms.
    """
    
    image_id: Optional[str] = dataclasses.field(default=None)
    virtualization_type: Optional[str] = dataclasses.field(default=None)
    
