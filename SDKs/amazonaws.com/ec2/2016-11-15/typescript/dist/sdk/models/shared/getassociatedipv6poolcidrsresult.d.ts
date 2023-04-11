import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an IPv6 CIDR block association.
 */
export declare class GetAssociatedIpv6PoolCidrsResultIpv6CidrAssociations extends SpeakeasyBase {
    associatedResource?: string;
    ipv6Cidr?: string;
}
/**
 * Success
 */
export declare class GetAssociatedIpv6PoolCidrsResult extends SpeakeasyBase {
    ipv6CidrAssociations?: GetAssociatedIpv6PoolCidrsResultIpv6CidrAssociations[];
    nextToken?: string;
}
