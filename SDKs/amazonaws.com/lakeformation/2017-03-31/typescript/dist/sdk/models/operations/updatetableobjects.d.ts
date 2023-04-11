import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTableObjectsRequestBody extends SpeakeasyBase {
    /**
     * The catalog containing the governed table to update. Defaults to the caller’s account ID.
     */
    catalogId?: string;
    /**
     * The database containing the governed table to update.
     */
    databaseName: string;
    /**
     * The governed table to update.
     */
    tableName: string;
    /**
     * The transaction at which to do the write.
     */
    transactionId?: string;
    /**
     * A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.
     */
    writeOperations: shared.WriteOperation[];
}
export declare class UpdateTableObjectsRequest extends SpeakeasyBase {
    requestBody: UpdateTableObjectsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateTableObjectsResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TransactionCanceledException
     */
    transactionCanceledException?: any;
    /**
     * TransactionCommitInProgressException
     */
    transactionCommitInProgressException?: any;
    /**
     * TransactionCommittedException
     */
    transactionCommittedException?: any;
    /**
     * Success
     */
    updateTableObjectsResponse?: Record<string, any>;
}
