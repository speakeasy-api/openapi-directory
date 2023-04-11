import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTablesXAmzTargetEnum {
    AWSGlueGetTables = "AWSGlue.GetTables"
}
export declare class GetTablesRequest extends SpeakeasyBase {
    getTablesRequest: shared.GetTablesRequest;
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
    xAmzTarget: GetTablesXAmzTargetEnum;
}
export declare class GetTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getTablesResponse?: shared.GetTablesResponse;
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
