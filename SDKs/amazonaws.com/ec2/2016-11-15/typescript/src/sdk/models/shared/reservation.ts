import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Reservation
/** 
 * Describes a launch request for one or more instances, and includes owner, requester, and security group information that applies to all instances in the launch request.
**/
export class Reservation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  instances?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterId?: Record<string, any>;

  @SpeakeasyMetadata()
  reservationId?: Record<string, any>;
}
