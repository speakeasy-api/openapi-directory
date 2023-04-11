import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatabasesXAmzTargetEnum {
    RedshiftDataListDatabases = "RedshiftData.ListDatabases"
}
export declare class ListDatabasesRequest extends SpeakeasyBase {
    listDatabasesRequest: shared.ListDatabasesRequest;
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
    xAmzTarget: ListDatabasesXAmzTargetEnum;
}
export declare class ListDatabasesResponse extends SpeakeasyBase {
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
    listDatabasesResponse?: shared.ListDatabasesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
