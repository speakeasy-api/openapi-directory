import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes address usage for a customer-owned address pool.
 */
export declare class GetCoipPoolUsageResultCoipAddressUsages extends SpeakeasyBase {
    allocationId?: string;
    awsAccountId?: string;
    awsService?: string;
    coIp?: string;
}
/**
 * Success
 */
export declare class GetCoipPoolUsageResult extends SpeakeasyBase {
    coipAddressUsages?: GetCoipPoolUsageResultCoipAddressUsages[];
    coipPoolId?: string;
    localGatewayRouteTableId?: string;
}
