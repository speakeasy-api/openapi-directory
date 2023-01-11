import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSubnetCidrReservationResultSubnetCidrReservation
/** 
 * Information about the created subnet CIDR reservation.
**/
export class CreateSubnetCidrReservationResultSubnetCidrReservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidr?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  reservationType?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetCidrReservationId?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;
}


export class CreateSubnetCidrReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnetCidrReservation?: CreateSubnetCidrReservationResultSubnetCidrReservation;
}
