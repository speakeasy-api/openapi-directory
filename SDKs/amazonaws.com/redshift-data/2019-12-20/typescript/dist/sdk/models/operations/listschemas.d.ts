import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListSchemasXAmzTargetEnum {
    RedshiftDataListSchemas = "RedshiftData.ListSchemas"
}
export declare class ListSchemasRequest extends SpeakeasyBase {
    listSchemasRequest: shared.ListSchemasRequest;
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
    xAmzTarget: ListSchemasXAmzTargetEnum;
}
export declare class ListSchemasResponse extends SpeakeasyBase {
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
    listSchemasResponse?: shared.ListSchemasResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
