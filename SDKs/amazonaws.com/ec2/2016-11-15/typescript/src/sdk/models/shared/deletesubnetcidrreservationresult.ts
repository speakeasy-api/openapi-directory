import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation
/** 
 * Information about the deleted subnet CIDR reservation.
**/
export class DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation extends SpeakeasyBase {
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


export class DeleteSubnetCidrReservationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deletedSubnetCidrReservation?: DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation;
}
