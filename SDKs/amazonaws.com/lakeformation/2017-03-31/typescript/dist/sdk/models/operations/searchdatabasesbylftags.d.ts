import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchDatabasesByLFTagsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * A list of conditions (<code>LFTag</code> structures) to search for in database resources.
     */
    expression: shared.LFTag[];
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * A continuation token, if this is not the first call to retrieve this list.
     */
    nextToken?: string;
}
export declare class SearchDatabasesByLFTagsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: SearchDatabasesByLFTagsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchDatabasesByLFTagsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
    /**
     * Success
     */
    searchDatabasesByLFTagsResponse?: shared.SearchDatabasesByLFTagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
