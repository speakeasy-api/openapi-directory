import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of reservation.
 */
export declare enum CreateSubnetCidrReservationResultSubnetCidrReservationReservationTypeEnum {
    Prefix = "prefix",
    Explicit = "explicit"
}
/**
 * Describes a tag.
 */
export declare class CreateSubnetCidrReservationResultSubnetCidrReservationTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the created subnet CIDR reservation.
 */
export declare class CreateSubnetCidrReservationResultSubnetCidrReservation extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ownerId?: string;
    reservationType?: CreateSubnetCidrReservationResultSubnetCidrReservationReservationTypeEnum;
    subnetCidrReservationId?: string;
    subnetId?: string;
    tags?: CreateSubnetCidrReservationResultSubnetCidrReservationTags[];
}
/**
 * Success
 */
export declare class CreateSubnetCidrReservationResult extends SpeakeasyBase {
    subnetCidrReservation?: CreateSubnetCidrReservationResultSubnetCidrReservation;
}
