import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class DeleteVpcEndpointsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class DeleteVpcEndpointsResultUnsuccessful extends SpeakeasyBase {
    error?: DeleteVpcEndpointsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class DeleteVpcEndpointsResult extends SpeakeasyBase {
    unsuccessful?: DeleteVpcEndpointsResultUnsuccessful[];
}
