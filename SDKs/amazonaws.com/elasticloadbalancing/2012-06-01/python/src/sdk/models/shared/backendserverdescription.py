import dataclasses
from typing import Optional


@dataclasses.dataclass
class BackendServerDescription:
    r"""BackendServerDescription
    Information about the configuration of an EC2 instance.
    """
    
    instance_port: Optional[int] = dataclasses.field(default=None)
    policy_names: Optional[list[str]] = dataclasses.field(default=None)
    
