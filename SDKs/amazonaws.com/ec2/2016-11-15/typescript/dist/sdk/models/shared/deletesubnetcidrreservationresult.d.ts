import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deleted subnet CIDR reservation.
**/
export declare class DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation extends SpeakeasyBase {
    cidr?: Record<string, any>;
    description?: Record<string, any>;
    ownerId?: Record<string, any>;
    reservationType?: Record<string, any>;
    subnetCidrReservationId?: Record<string, any>;
    subnetId?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class DeleteSubnetCidrReservationResult extends SpeakeasyBase {
    deletedSubnetCidrReservation?: DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation;
}
