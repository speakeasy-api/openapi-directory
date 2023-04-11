import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
 */
export declare class QueryTableRowsRequestBodyFilterFormula extends SpeakeasyBase {
    contextRowId?: string;
    formula?: string;
}
export declare class QueryTableRowsRequestBody extends SpeakeasyBase {
    /**
     *  An object that represents a filter formula along with the id of the context row under which the filter function needs to evaluate.
     */
    filterFormula: QueryTableRowsRequestBodyFilterFormula;
    /**
     * The maximum number of rows to return in each page of the results.
     */
    maxResults?: number;
    /**
     * <p> This parameter is optional. If a nextToken is not specified, the API returns the first page of data. </p> <p> Pagination tokens expire after 1 hour. If you use a token that was returned more than an hour back, the API will throw ValidationException. </p>
     */
    nextToken?: string;
}
export declare class QueryTableRowsRequest extends SpeakeasyBase {
    requestBody: QueryTableRowsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    /**
     * <p>The ID of the table whose rows are being queried.</p> <p> If a table with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    tableId: string;
    /**
     * <p>The ID of the workbook whose table rows are being queried.</p> <p> If a workbook with the specified id could not be found, this API throws ResourceNotFoundException. </p>
     */
    workbookId: string;
}
export declare class QueryTableRowsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    queryTableRowsResult?: shared.QueryTableRowsResult;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
