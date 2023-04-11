import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an address range of an IPv4 address pool.
 */
export declare class DescribePublicIpv4PoolsResultPublicIpv4PoolsPoolAddressRanges extends SpeakeasyBase {
    addressCount?: number;
    availableAddressCount?: number;
    firstAddress?: string;
    lastAddress?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribePublicIpv4PoolsResultPublicIpv4PoolsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an IPv4 address pool.
 */
export declare class DescribePublicIpv4PoolsResultPublicIpv4Pools extends SpeakeasyBase {
    description?: string;
    networkBorderGroup?: string;
    poolAddressRanges?: DescribePublicIpv4PoolsResultPublicIpv4PoolsPoolAddressRanges[];
    poolId?: string;
    tags?: DescribePublicIpv4PoolsResultPublicIpv4PoolsTags[];
    totalAddressCount?: number;
    totalAvailableAddressCount?: number;
}
/**
 * Success
 */
export declare class DescribePublicIpv4PoolsResult extends SpeakeasyBase {
    nextToken?: string;
    publicIpv4Pools?: DescribePublicIpv4PoolsResultPublicIpv4Pools[];
}
