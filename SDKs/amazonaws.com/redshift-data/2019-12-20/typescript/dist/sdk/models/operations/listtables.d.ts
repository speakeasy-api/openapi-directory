import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTablesXAmzTargetEnum {
    RedshiftDataListTables = "RedshiftData.ListTables"
}
export declare class ListTablesRequest extends SpeakeasyBase {
    listTablesRequest: shared.ListTablesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTablesXAmzTargetEnum;
}
export declare class ListTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DatabaseConnectionException
     */
    databaseConnectionException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listTablesResponse?: shared.ListTablesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
