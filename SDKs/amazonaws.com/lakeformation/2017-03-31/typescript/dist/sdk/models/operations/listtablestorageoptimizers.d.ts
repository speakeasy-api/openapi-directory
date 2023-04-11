import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The specific type of storage optimizers to list. The supported value is <code>compaction</code>.
 */
export declare enum ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum {
    Compaction = "COMPACTION",
    GarbageCollection = "GARBAGE_COLLECTION",
    All = "ALL"
}
export declare class ListTableStorageOptimizersRequestBody extends SpeakeasyBase {
    /**
     * The Catalog ID of the table.
     */
    catalogId?: string;
    /**
     * Name of the database where the table is present.
     */
    databaseName: string;
    /**
     * The number of storage optimizers to return on each call.
     */
    maxResults?: number;
    /**
     * A continuation token, if this is a continuation call.
     */
    nextToken?: string;
    /**
     * The specific type of storage optimizers to list. The supported value is <code>compaction</code>.
     */
    storageOptimizerType?: ListTableStorageOptimizersRequestBodyStorageOptimizerTypeEnum;
    /**
     * Name of the table.
     */
    tableName: string;
}
export declare class ListTableStorageOptimizersRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListTableStorageOptimizersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTableStorageOptimizersResponse extends SpeakeasyBase {
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
    listTableStorageOptimizersResponse?: shared.ListTableStorageOptimizersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
