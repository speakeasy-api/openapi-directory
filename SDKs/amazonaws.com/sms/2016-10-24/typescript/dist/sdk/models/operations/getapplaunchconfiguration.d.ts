import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppLaunchConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration"
}
export declare class GetAppLaunchConfigurationRequest extends SpeakeasyBase {
    getAppLaunchConfigurationRequest: shared.GetAppLaunchConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppLaunchConfigurationXAmzTargetEnum;
}
export declare class GetAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppLaunchConfigurationResponse?: shared.GetAppLaunchConfigurationResponse;
    /**
     * InternalError
     */
    internalError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
