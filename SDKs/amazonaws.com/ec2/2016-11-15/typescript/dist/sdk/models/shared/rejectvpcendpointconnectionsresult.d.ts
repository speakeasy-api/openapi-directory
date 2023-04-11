import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class RejectVpcEndpointConnectionsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class RejectVpcEndpointConnectionsResultUnsuccessful extends SpeakeasyBase {
    error?: RejectVpcEndpointConnectionsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class RejectVpcEndpointConnectionsResult extends SpeakeasyBase {
    unsuccessful?: RejectVpcEndpointConnectionsResultUnsuccessful[];
}
