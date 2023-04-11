import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that describes certain columns on certain rows.
 */
export declare class UpdateDataCellsFilterRequestBodyTableData extends SpeakeasyBase {
    columnNames?: string[];
    columnWildcard?: shared.ColumnWildcard;
    databaseName?: string;
    name?: string;
    rowFilter?: shared.RowFilter;
    tableCatalogId?: string;
    tableName?: string;
    versionId?: string;
}
export declare class UpdateDataCellsFilterRequestBody extends SpeakeasyBase {
    /**
     * A structure that describes certain columns on certain rows.
     */
    tableData: UpdateDataCellsFilterRequestBodyTableData;
}
export declare class UpdateDataCellsFilterRequest extends SpeakeasyBase {
    requestBody: UpdateDataCellsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDataCellsFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDataCellsFilterResponse?: Record<string, any>;
}
