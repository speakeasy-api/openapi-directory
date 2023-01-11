import dataclasses
from typing import Optional


@dataclasses.dataclass
class Endpoint:
    r"""Endpoint
    Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
    """
    
    address: Optional[str] = dataclasses.field(default=None)
    hosted_zone_id: Optional[str] = dataclasses.field(default=None)
    port: Optional[int] = dataclasses.field(default=None)
    
