import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDatabasesXAmzTargetEnum {
    Timestream20181101ListDatabases = "Timestream_20181101.ListDatabases"
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
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEndpointException
     */
    invalidEndpointException?: any;
    /**
     * Success
     */
    listDatabasesResponse?: shared.ListDatabasesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
