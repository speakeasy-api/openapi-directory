import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
 */
export declare class ListDataCellsFilterRequestBodyTable extends SpeakeasyBase {
    catalogId?: string;
    databaseName?: string;
    name?: string;
    tableWildcard?: Record<string, any>;
}
export declare class ListDataCellsFilterRequestBody extends SpeakeasyBase {
    /**
     * The maximum size of the response.
     */
    maxResults?: number;
    /**
     * A continuation token, if this is a continuation call.
     */
    nextToken?: string;
    /**
     * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
     */
    table?: ListDataCellsFilterRequestBodyTable;
}
export declare class ListDataCellsFilterRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListDataCellsFilterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDataCellsFilterResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    listDataCellsFilterResponse?: shared.ListDataCellsFilterResponse;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
