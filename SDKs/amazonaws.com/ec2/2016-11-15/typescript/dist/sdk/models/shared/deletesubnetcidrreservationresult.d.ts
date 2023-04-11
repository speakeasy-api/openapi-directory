import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of reservation.
 */
export declare enum DeleteSubnetCidrReservationResultDeletedSubnetCidrReservationReservationTypeEnum {
    Prefix = "prefix",
    Explicit = "explicit"
}
/**
 * Describes a tag.
 */
export declare class DeleteSubnetCidrReservationResultDeletedSubnetCidrReservationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the deleted subnet CIDR reservation.
 */
export declare class DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ownerId?: string;
    reservationType?: DeleteSubnetCidrReservationResultDeletedSubnetCidrReservationReservationTypeEnum;
    subnetCidrReservationId?: string;
    subnetId?: string;
    tags?: DeleteSubnetCidrReservationResultDeletedSubnetCidrReservationTags[];
}
/**
 * Success
 */
export declare class DeleteSubnetCidrReservationResult extends SpeakeasyBase {
    deletedSubnetCidrReservation?: DeleteSubnetCidrReservationResultDeletedSubnetCidrReservation;
}
