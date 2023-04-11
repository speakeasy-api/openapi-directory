import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that describes certain columns on certain rows.
 */
export declare class CreateDataCellsFilterRequestBodyTableData extends SpeakeasyBase {
    columnNames?: string[];
    columnWildcard?: shared.ColumnWildcard;
    databaseName?: string;
    name?: string;
    rowFilter?: shared.RowFilter;
    tableCatalogId?: string;
    tableName?: string;
    versionId?: string;
}
export declare class CreateDataCellsFilterRequestBody extends SpeakeasyBase {
    /**
     * A structure that describes certain columns on certain rows.
     */
    tableData: CreateDataCellsFilterRequestBodyTableData;
}
export declare class CreateDataCellsFilterRequest extends SpeakeasyBase {
    requestBody: CreateDataCellsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDataCellsFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createDataCellsFilterResponse?: Record<string, any>;
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
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
