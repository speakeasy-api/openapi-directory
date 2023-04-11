import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the client connection.
 */
export declare enum DescribeClientVpnConnectionsResultConnectionsStatusCodeEnum {
    Active = "active",
    FailedToTerminate = "failed-to-terminate",
    Terminating = "terminating",
    Terminated = "terminated"
}
/**
 * The current state of the client connection.
 */
export declare class DescribeClientVpnConnectionsResultConnectionsStatus extends SpeakeasyBase {
    code?: DescribeClientVpnConnectionsResultConnectionsStatusCodeEnum;
    message?: string;
}
/**
 * Describes a client connection.
 */
export declare class DescribeClientVpnConnectionsResultConnections extends SpeakeasyBase {
    clientIp?: string;
    clientVpnEndpointId?: string;
    commonName?: string;
    connectionEndTime?: string;
    connectionEstablishedTime?: string;
    connectionId?: string;
    egressBytes?: string;
    egressPackets?: string;
    ingressBytes?: string;
    ingressPackets?: string;
    postureComplianceStatuses?: string[];
    status?: DescribeClientVpnConnectionsResultConnectionsStatus;
    timestamp?: string;
    username?: string;
}
/**
 * Success
 */
export declare class DescribeClientVpnConnectionsResult extends SpeakeasyBase {
    connections?: DescribeClientVpnConnectionsResultConnections[];
    nextToken?: string;
}
