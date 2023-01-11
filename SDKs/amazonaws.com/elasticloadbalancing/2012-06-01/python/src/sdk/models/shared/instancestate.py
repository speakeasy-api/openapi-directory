import dataclasses
from typing import Optional


@dataclasses.dataclass
class InstanceState:
    r"""InstanceState
    Information about the state of an EC2 instance.
    """
    
    description: Optional[str] = dataclasses.field(default=None)
    instance_id: Optional[str] = dataclasses.field(default=None)
    reason_code: Optional[str] = dataclasses.field(default=None)
    state: Optional[str] = dataclasses.field(default=None)
    
