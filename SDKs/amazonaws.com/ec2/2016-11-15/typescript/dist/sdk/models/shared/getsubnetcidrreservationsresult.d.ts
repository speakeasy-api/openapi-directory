import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of reservation.
 */
export declare enum GetSubnetCidrReservationsResultSubnetIpv4CidrReservationsReservationTypeEnum {
    Prefix = "prefix",
    Explicit = "explicit"
}
/**
 * Describes a tag.
 */
export declare class GetSubnetCidrReservationsResultSubnetIpv4CidrReservationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a subnet CIDR reservation.
 */
export declare class GetSubnetCidrReservationsResultSubnetIpv4CidrReservations extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ownerId?: string;
    reservationType?: GetSubnetCidrReservationsResultSubnetIpv4CidrReservationsReservationTypeEnum;
    subnetCidrReservationId?: string;
    subnetId?: string;
    tags?: GetSubnetCidrReservationsResultSubnetIpv4CidrReservationsTags[];
}
/**
 * The type of reservation.
 */
export declare enum GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsReservationTypeEnum {
    Prefix = "prefix",
    Explicit = "explicit"
}
/**
 * Describes a tag.
 */
export declare class GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a subnet CIDR reservation.
 */
export declare class GetSubnetCidrReservationsResultSubnetIpv6CidrReservations extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ownerId?: string;
    reservationType?: GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsReservationTypeEnum;
    subnetCidrReservationId?: string;
    subnetId?: string;
    tags?: GetSubnetCidrReservationsResultSubnetIpv6CidrReservationsTags[];
}
/**
 * Success
 */
export declare class GetSubnetCidrReservationsResult extends SpeakeasyBase {
    nextToken?: string;
    subnetIpv4CidrReservations?: GetSubnetCidrReservationsResultSubnetIpv4CidrReservations[];
    subnetIpv6CidrReservations?: GetSubnetCidrReservationsResultSubnetIpv6CidrReservations[];
}
