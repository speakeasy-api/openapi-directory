import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class CreateCapacityReservationResultCapacityReservation:
    r"""CreateCapacityReservationResultCapacityReservation
    Information about the Capacity Reservation.
    """
    
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    available_instance_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    capacity_reservation_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    create_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ebs_optimized: Optional[dict[str, Any]] = dataclasses.field(default=None)
    end_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    end_date_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ephemeral_storage: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_match_criteria: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_platform: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    outpost_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    start_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tenancy: Optional[dict[str, Any]] = dataclasses.field(default=None)
    total_instance_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCapacityReservationResult:
    capacity_reservation: Optional[CreateCapacityReservationResultCapacityReservation] = dataclasses.field(default=None)
    
