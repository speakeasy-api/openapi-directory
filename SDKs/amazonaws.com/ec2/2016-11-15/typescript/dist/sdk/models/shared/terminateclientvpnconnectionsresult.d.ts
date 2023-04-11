import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the client connection.
 */
export declare enum TerminateClientVpnConnectionsResultConnectionStatusesCurrentStatusCodeEnum {
    Active = "active",
    FailedToTerminate = "failed-to-terminate",
    Terminating = "terminating",
    Terminated = "terminated"
}
/**
 * A message about the status of the client connection, if applicable.
 */
export declare class TerminateClientVpnConnectionsResultConnectionStatusesCurrentStatus extends SpeakeasyBase {
    code?: TerminateClientVpnConnectionsResultConnectionStatusesCurrentStatusCodeEnum;
    message?: string;
}
/**
 * The state of the client connection.
 */
export declare enum TerminateClientVpnConnectionsResultConnectionStatusesPreviousStatusCodeEnum {
    Active = "active",
    FailedToTerminate = "failed-to-terminate",
    Terminating = "terminating",
    Terminated = "terminated"
}
/**
 * The state of the client connection.
 */
export declare class TerminateClientVpnConnectionsResultConnectionStatusesPreviousStatus extends SpeakeasyBase {
    code?: TerminateClientVpnConnectionsResultConnectionStatusesPreviousStatusCodeEnum;
    message?: string;
}
/**
 * Information about a terminated Client VPN endpoint client connection.
 */
export declare class TerminateClientVpnConnectionsResultConnectionStatuses extends SpeakeasyBase {
    connectionId?: string;
    currentStatus?: TerminateClientVpnConnectionsResultConnectionStatusesCurrentStatus;
    previousStatus?: TerminateClientVpnConnectionsResultConnectionStatusesPreviousStatus;
}
/**
 * Success
 */
export declare class TerminateClientVpnConnectionsResult extends SpeakeasyBase {
    clientVpnEndpointId?: string;
    connectionStatuses?: TerminateClientVpnConnectionsResultConnectionStatuses[];
    username?: string;
}
