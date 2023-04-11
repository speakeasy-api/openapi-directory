import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAppLaunchConfigurationXAmzTargetEnum {
    AWSServerMigrationServiceV20161024PutAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration"
}
export declare class PutAppLaunchConfigurationRequest extends SpeakeasyBase {
    putAppLaunchConfigurationRequest: shared.PutAppLaunchConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppLaunchConfigurationXAmzTargetEnum;
}
export declare class PutAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    putAppLaunchConfigurationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
