import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class DeleteVpcEndpointConnectionNotificationsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class DeleteVpcEndpointConnectionNotificationsResultUnsuccessful extends SpeakeasyBase {
    error?: DeleteVpcEndpointConnectionNotificationsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class DeleteVpcEndpointConnectionNotificationsResult extends SpeakeasyBase {
    unsuccessful?: DeleteVpcEndpointConnectionNotificationsResultUnsuccessful[];
}
