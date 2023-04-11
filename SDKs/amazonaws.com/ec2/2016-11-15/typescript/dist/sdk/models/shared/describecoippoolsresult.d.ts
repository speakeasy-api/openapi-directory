import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeCoipPoolsResultCoipPoolsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a customer-owned address pool.
 */
export declare class DescribeCoipPoolsResultCoipPools extends SpeakeasyBase {
    localGatewayRouteTableId?: string;
    poolArn?: string;
    poolCidrs?: string[];
    poolId?: string;
    tags?: DescribeCoipPoolsResultCoipPoolsTags[];
}
/**
 * Success
 */
export declare class DescribeCoipPoolsResult extends SpeakeasyBase {
    coipPools?: DescribeCoipPoolsResultCoipPools[];
    nextToken?: string;
}
