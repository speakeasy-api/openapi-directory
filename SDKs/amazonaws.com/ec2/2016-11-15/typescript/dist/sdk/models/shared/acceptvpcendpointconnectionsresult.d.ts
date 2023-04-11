import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class AcceptVpcEndpointConnectionsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class AcceptVpcEndpointConnectionsResultUnsuccessful extends SpeakeasyBase {
    error?: AcceptVpcEndpointConnectionsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class AcceptVpcEndpointConnectionsResult extends SpeakeasyBase {
    unsuccessful?: AcceptVpcEndpointConnectionsResultUnsuccessful[];
}
