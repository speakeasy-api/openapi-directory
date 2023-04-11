import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.
 */
export declare enum ListTransactionsRequestBodyStatusFilterEnum {
    All = "ALL",
    Completed = "COMPLETED",
    Active = "ACTIVE",
    Committed = "COMMITTED",
    Aborted = "ABORTED"
}
export declare class ListTransactionsRequestBody extends SpeakeasyBase {
    /**
     * The catalog for which to list transactions. Defaults to the account ID of the caller.
     */
    catalogId?: string;
    /**
     * The maximum number of transactions to return in a single call.
     */
    maxResults?: number;
    /**
     * A continuation token if this is not the first call to retrieve transactions.
     */
    nextToken?: string;
    /**
     *  A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>.
     */
    statusFilter?: ListTransactionsRequestBodyStatusFilterEnum;
}
export declare class ListTransactionsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListTransactionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listTransactionsResponse?: shared.ListTransactionsResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
