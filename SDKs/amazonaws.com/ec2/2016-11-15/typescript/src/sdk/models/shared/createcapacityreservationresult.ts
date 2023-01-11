import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateCapacityReservationResultCapacityReservation
/** 
 * Information about the Capacity Reservation.
**/
export class CreateCapacityReservationResultCapacityReservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZoneId?: Record<string, any>;

  @SpeakeasyMetadata()
  availableInstanceCount?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationArn?: Record<string, any>;

  @SpeakeasyMetadata()
  capacityReservationId?: Record<string, any>;

  @SpeakeasyMetadata()
  createDate?: Record<string, any>;

  @SpeakeasyMetadata()
  ebsOptimized?: Record<string, any>;

  @SpeakeasyMetadata()
  endDate?: Record<string, any>;

  @SpeakeasyMetadata()
  endDateType?: Record<string, any>;

  @SpeakeasyMetadata()
  ephemeralStorage?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceMatchCriteria?: Record<string, any>;

  @SpeakeasyMetadata()
  instancePlatform?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceType?: Record<string, any>;

  @SpeakeasyMetadata()
  outpostArn?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  startDate?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  tenancy?: Record<string, any>;

  @SpeakeasyMetadata()
  totalInstanceCount?: Record<string, any>;
}


export class CreateCapacityReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  capacityReservation?: CreateCapacityReservationResultCapacityReservation;
}
