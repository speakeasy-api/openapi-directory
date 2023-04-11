import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLoggingConfigurationXAmzTargetEnum {
    NetworkFirewall20201112UpdateLoggingConfiguration = "NetworkFirewall_20201112.UpdateLoggingConfiguration"
}
export declare class UpdateLoggingConfigurationRequest extends SpeakeasyBase {
    updateLoggingConfigurationRequest: shared.UpdateLoggingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLoggingConfigurationXAmzTargetEnum;
}
export declare class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * LogDestinationPermissionException
     */
    logDestinationPermissionException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateLoggingConfigurationResponse?: shared.UpdateLoggingConfigurationResponse;
}
