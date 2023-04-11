import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the resource.
 */
export declare enum AllocateIpamPoolCidrResultIpamPoolAllocationResourceTypeEnum {
    IpamPool = "ipam-pool",
    Vpc = "vpc",
    Ec2PublicIpv4Pool = "ec2-public-ipv4-pool",
    Custom = "custom"
}
/**
 * Information about the allocation created.
 */
export declare class AllocateIpamPoolCidrResultIpamPoolAllocation extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    ipamPoolAllocationId?: string;
    resourceId?: string;
    resourceOwner?: string;
    resourceRegion?: string;
    resourceType?: AllocateIpamPoolCidrResultIpamPoolAllocationResourceTypeEnum;
}
/**
 * Success
 */
export declare class AllocateIpamPoolCidrResult extends SpeakeasyBase {
    ipamPoolAllocation?: AllocateIpamPoolCidrResultIpamPoolAllocation;
}
