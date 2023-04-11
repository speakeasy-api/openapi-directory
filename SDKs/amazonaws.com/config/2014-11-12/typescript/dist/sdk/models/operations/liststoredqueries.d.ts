import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListStoredQueriesXAmzTargetEnum {
    StarlingDoveServiceListStoredQueries = "StarlingDoveService.ListStoredQueries"
}
export declare class ListStoredQueriesRequest extends SpeakeasyBase {
    listStoredQueriesRequest: shared.ListStoredQueriesRequest;
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
    xAmzTarget: ListStoredQueriesXAmzTargetEnum;
}
export declare class ListStoredQueriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listStoredQueriesResponse?: shared.ListStoredQueriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
