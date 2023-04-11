import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the resource.
 */
export declare enum GetIpamPoolAllocationsResultIpamPoolAllocationsResourceTypeEnum {
    IpamPool = "ipam-pool",
    Vpc = "vpc",
    Ec2PublicIpv4Pool = "ec2-public-ipv4-pool",
    Custom = "custom"
}
/**
 * In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource.
 */
export declare class GetIpamPoolAllocationsResultIpamPoolAllocations extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ipamPoolAllocationId?: string;
    resourceId?: string;
    resourceOwner?: string;
    resourceRegion?: string;
    resourceType?: GetIpamPoolAllocationsResultIpamPoolAllocationsResourceTypeEnum;
}
/**
 * Success
 */
export declare class GetIpamPoolAllocationsResult extends SpeakeasyBase {
    ipamPoolAllocations?: GetIpamPoolAllocationsResultIpamPoolAllocations[];
    nextToken?: string;
}
