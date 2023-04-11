import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024TerminateApp = "AWSServerMigrationService_V2016_10_24.TerminateApp"
}
export declare class TerminateAppRequest extends SpeakeasyBase {
    terminateAppRequest: shared.TerminateAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateAppXAmzTargetEnum;
}
export declare class TerminateAppResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    terminateAppResponse?: Record<string, any>;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
