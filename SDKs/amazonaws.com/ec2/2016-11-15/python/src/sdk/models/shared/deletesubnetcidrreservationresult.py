import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation:
    r"""DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation
    Information about the deleted subnet CIDR reservation.
    """
    
    cidr: Optional[dict[str, Any]] = dataclasses.field(default=None)
    description: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    reservation_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_cidr_reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSubnetCidrReservationResult:
    deleted_subnet_cidr_reservation: Optional[DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation] = dataclasses.field(default=None)
    
