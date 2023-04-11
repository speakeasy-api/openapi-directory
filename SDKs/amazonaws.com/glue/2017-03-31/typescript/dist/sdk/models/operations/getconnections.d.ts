import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetConnectionsXAmzTargetEnum {
    AWSGlueGetConnections = "AWSGlue.GetConnections"
}
export declare class GetConnectionsRequest extends SpeakeasyBase {
    getConnectionsRequest: shared.GetConnectionsRequest;
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
    xAmzTarget: GetConnectionsXAmzTargetEnum;
}
export declare class GetConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getConnectionsResponse?: shared.GetConnectionsResponse;
    /**
     * GlueEncryptionException
     */
    glueEncryptionException?: any;
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
