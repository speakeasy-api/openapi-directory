import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDatabasesXAmzTargetEnum {
    AWSGlueGetDatabases = "AWSGlue.GetDatabases"
}
export declare class GetDatabasesRequest extends SpeakeasyBase {
    getDatabasesRequest: shared.GetDatabasesRequest;
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
    xAmzTarget: GetDatabasesXAmzTargetEnum;
}
export declare class GetDatabasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDatabasesResponse?: shared.GetDatabasesResponse;
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
