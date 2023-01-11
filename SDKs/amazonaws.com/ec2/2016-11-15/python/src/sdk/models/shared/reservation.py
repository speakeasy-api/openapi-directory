import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class Reservation:
    r"""Reservation
    Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
    """
    
    groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instances: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
