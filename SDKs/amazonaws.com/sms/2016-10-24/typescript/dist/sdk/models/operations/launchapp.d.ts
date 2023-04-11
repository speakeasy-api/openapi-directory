import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum LaunchAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024LaunchApp = "AWSServerMigrationService_V2016_10_24.LaunchApp"
}
export declare class LaunchAppRequest extends SpeakeasyBase {
    launchAppRequest: shared.LaunchAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LaunchAppXAmzTargetEnum;
}
export declare class LaunchAppResponse extends SpeakeasyBase {
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
     * Success
     */
    launchAppResponse?: Record<string, any>;
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
