import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the Client VPN endpoint route.
 */
export declare enum DescribeClientVpnRoutesResultRoutesStatusCodeEnum {
    Creating = "creating",
    Active = "active",
    Failed = "failed",
    Deleting = "deleting"
}
/**
 * The current state of the route.
 */
export declare class DescribeClientVpnRoutesResultRoutesStatus extends SpeakeasyBase {
    code?: DescribeClientVpnRoutesResultRoutesStatusCodeEnum;
    message?: string;
}
/**
 * Information about a Client VPN endpoint route.
 */
export declare class DescribeClientVpnRoutesResultRoutes extends SpeakeasyBase {
    clientVpnEndpointId?: string;
    description?: string;
    destinationCidr?: string;
    origin?: string;
    status?: DescribeClientVpnRoutesResultRoutesStatus;
    targetSubnet?: string;
    type?: string;
}
/**
 * Success
 */
export declare class DescribeClientVpnRoutesResult extends SpeakeasyBase {
    nextToken?: string;
    routes?: DescribeClientVpnRoutesResultRoutes[];
}
