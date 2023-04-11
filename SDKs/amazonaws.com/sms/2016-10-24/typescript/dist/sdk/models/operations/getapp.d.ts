import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppXAmzTargetEnum {
    AWSServerMigrationServiceV20161024GetApp = "AWSServerMigrationService_V2016_10_24.GetApp"
}
export declare class GetAppRequest extends SpeakeasyBase {
    getAppRequest: shared.GetAppRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppXAmzTargetEnum;
}
export declare class GetAppResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppResponse?: shared.GetAppResponse;
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
