import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetUserDefinedFunctionsXAmzTargetEnum {
    AWSGlueGetUserDefinedFunctions = "AWSGlue.GetUserDefinedFunctions"
}
export declare class GetUserDefinedFunctionsRequest extends SpeakeasyBase {
    getUserDefinedFunctionsRequest: shared.GetUserDefinedFunctionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUserDefinedFunctionsXAmzTargetEnum;
}
export declare class GetUserDefinedFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getUserDefinedFunctionsResponse?: shared.GetUserDefinedFunctionsResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
