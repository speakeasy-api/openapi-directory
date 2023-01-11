import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateSubnetCidrReservationResultSubnetCidrReservation:
    r"""CreateSubnetCidrReservationResultSubnetCidrReservation
    Information about the created subnet CIDR reservation.
    """
    
    cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reservation_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_cidr_reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateSubnetCidrReservationResult:
    subnet_cidr_reservation: Optional[CreateSubnetCidrReservationResultSubnetCidrReservation] = dataclasses.field(default=None)
    
