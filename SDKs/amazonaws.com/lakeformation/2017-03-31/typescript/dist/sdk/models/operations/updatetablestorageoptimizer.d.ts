import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTableStorageOptimizerRequestBody extends SpeakeasyBase {
    /**
     * The Catalog ID of the table.
     */
    catalogId?: string;
    /**
     * Name of the database where the table is present.
     */
    databaseName: string;
    /**
     * Name of the table for which to enable the storage optimizer.
     */
    storageOptimizerConfig: Record<string, Record<string, string>>;
    /**
     * Name of the table for which to enable the storage optimizer.
     */
    tableName: string;
}
export declare class UpdateTableStorageOptimizerRequest extends SpeakeasyBase {
    requestBody: UpdateTableStorageOptimizerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateTableStorageOptimizerResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateTableStorageOptimizerResponse?: shared.UpdateTableStorageOptimizerResponse;
}
