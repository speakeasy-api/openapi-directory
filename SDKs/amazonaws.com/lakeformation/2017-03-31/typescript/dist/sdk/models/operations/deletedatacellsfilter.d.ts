import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDataCellsFilterRequestBody extends SpeakeasyBase {
    /**
     * A database in the Glue Data Catalog.
     */
    databaseName?: string;
    /**
     * The name given by the user to the data filter cell.
     */
    name?: string;
    /**
     * The ID of the catalog to which the table belongs.
     */
    tableCatalogId?: string;
    /**
     * A table in the database.
     */
    tableName?: string;
}
export declare class DeleteDataCellsFilterRequest extends SpeakeasyBase {
    requestBody: DeleteDataCellsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDataCellsFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteDataCellsFilterResponse?: Record<string, any>;
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
}
