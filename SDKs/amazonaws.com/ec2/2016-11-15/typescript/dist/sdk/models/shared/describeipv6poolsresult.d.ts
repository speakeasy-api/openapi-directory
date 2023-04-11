import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a CIDR block for an address pool.
 */
export declare class DescribeIpv6PoolsResultIpv6PoolsPoolCidrBlocks extends SpeakeasyBase {
    cidr?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeIpv6PoolsResultIpv6PoolsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an IPv6 address pool.
 */
export declare class DescribeIpv6PoolsResultIpv6Pools extends SpeakeasyBase {
    description?: string;
    poolCidrBlocks?: DescribeIpv6PoolsResultIpv6PoolsPoolCidrBlocks[];
    poolId?: string;
    tags?: DescribeIpv6PoolsResultIpv6PoolsTags[];
}
/**
 * Success
 */
export declare class DescribeIpv6PoolsResult extends SpeakeasyBase {
    ipv6Pools?: DescribeIpv6PoolsResultIpv6Pools[];
    nextToken?: string;
}
