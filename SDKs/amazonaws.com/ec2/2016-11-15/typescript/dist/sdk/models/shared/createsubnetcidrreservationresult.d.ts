import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the created subnet CIDR reservation.
**/
export declare class CreateSubnetCidrReservationResultSubnetCidrReservation extends SpeakeasyBase {
    cidr?: Record<string, any>;
    description?: Record<string, any>;
    ownerId?: Record<string, any>;
    reservationType?: Record<string, any>;
    subnetCidrReservationId?: Record<string, any>;
    subnetId?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreateSubnetCidrReservationResult extends SpeakeasyBase {
    subnetCidrReservation?: CreateSubnetCidrReservationResultSubnetCidrReservation;
}
