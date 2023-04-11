import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the error.
 */
export declare class DeleteVpcEndpointServiceConfigurationsResultUnsuccessfulError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Information about items that were not successfully processed in a batch call.
 */
export declare class DeleteVpcEndpointServiceConfigurationsResultUnsuccessful extends SpeakeasyBase {
    error?: DeleteVpcEndpointServiceConfigurationsResultUnsuccessfulError;
    resourceId?: string;
}
/**
 * Success
 */
export declare class DeleteVpcEndpointServiceConfigurationsResult extends SpeakeasyBase {
    unsuccessful?: DeleteVpcEndpointServiceConfigurationsResultUnsuccessful[];
}
