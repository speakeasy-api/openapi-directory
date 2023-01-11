import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the route.
**/
export declare class DeleteClientVpnRouteResultStatus extends SpeakeasyBase {
    code?: Record<string, any>;
    message?: Record<string, any>;
}
export declare class DeleteClientVpnRouteResult extends SpeakeasyBase {
    status?: DeleteClientVpnRouteResultStatus;
}
