import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppLaunchConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DeleteAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration"
}
export declare class DeleteAppLaunchConfigurationRequest extends SpeakeasyBase {
    deleteAppLaunchConfigurationRequest: shared.DeleteAppLaunchConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppLaunchConfigurationXAmzTargetEnum;
}
export declare class DeleteAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAppLaunchConfigurationResponse?: Record<string, any>;
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
