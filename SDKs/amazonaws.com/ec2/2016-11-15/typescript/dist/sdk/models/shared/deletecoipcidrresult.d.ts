import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about a range of customer-owned IP addresses.
 */
export declare class DeleteCoipCidrResultCoipCidr extends SpeakeasyBase {
    cidr?: string;
    coipPoolId?: string;
    localGatewayRouteTableId?: string;
}
/**
 * Success
 */
export declare class DeleteCoipCidrResult extends SpeakeasyBase {
    coipCidr?: DeleteCoipCidrResultCoipCidr;
}
