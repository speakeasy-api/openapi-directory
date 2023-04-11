import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTableObjectsRequestBody extends SpeakeasyBase {
    /**
     * The catalog containing the governed table. Defaults to the caller’s account.
     */
    catalogId?: string;
    /**
     * The database containing the governed table.
     */
    databaseName: string;
    /**
     * Specifies how many values to return in a page.
     */
    maxResults?: number;
    /**
     * A continuation token if this is not the first call to retrieve these objects.
     */
    nextToken?: string;
    /**
     * <p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>
     */
    partitionPredicate?: string;
    /**
     * The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>.
     */
    queryAsOfTime?: Date;
    /**
     * The governed table for which to retrieve objects.
     */
    tableName: string;
    /**
     * The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.
     */
    transactionId?: string;
}
export declare class GetTableObjectsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetTableObjectsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTableObjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getTableObjectsResponse?: shared.GetTableObjectsResponse;
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
    /**
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
    /**
     * TransactionCommittedException
     */
    transactionCommittedException?: any;
}
