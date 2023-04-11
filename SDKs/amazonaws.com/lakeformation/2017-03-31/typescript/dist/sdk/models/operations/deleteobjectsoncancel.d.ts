import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteObjectsOnCancelRequestBody extends SpeakeasyBase {
    /**
     * The Glue data catalog that contains the governed table. Defaults to the current account ID.
     */
    catalogId?: string;
    /**
     * The database that contains the governed table.
     */
    databaseName: string;
    /**
     * A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.
     */
    objects: shared.VirtualObject[];
    /**
     * The name of the governed table.
     */
    tableName: string;
    /**
     * ID of the transaction that the writes occur in.
     */
    transactionId: string;
}
export declare class DeleteObjectsOnCancelRequest extends SpeakeasyBase {
    requestBody: DeleteObjectsOnCancelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteObjectsOnCancelResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteObjectsOnCancelResponse?: Record<string, any>;
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
