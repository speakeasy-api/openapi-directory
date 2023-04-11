import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the address range of the public IPv4 pool.
 */
export declare class ProvisionPublicIpv4PoolCidrResultPoolAddressRange extends SpeakeasyBase {
    addressCount?: number;
    availableAddressCount?: number;
    firstAddress?: string;
    lastAddress?: string;
}
/**
 * Success
 */
export declare class ProvisionPublicIpv4PoolCidrResult extends SpeakeasyBase {
    poolAddressRange?: ProvisionPublicIpv4PoolCidrResultPoolAddressRange;
    poolId?: string;
}
