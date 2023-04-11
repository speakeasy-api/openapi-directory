import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTableVersionsXAmzTargetEnum {
    AWSGlueGetTableVersions = "AWSGlue.GetTableVersions"
}
export declare class GetTableVersionsRequest extends SpeakeasyBase {
    getTableVersionsRequest: shared.GetTableVersionsRequest;
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
    xAmzTarget: GetTableVersionsXAmzTargetEnum;
}
export declare class GetTableVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getTableVersionsResponse?: shared.GetTableVersionsResponse;
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
