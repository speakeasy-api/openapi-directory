import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The search expression.
 */
export declare class SearchSessionsRequestBodySearchExpression extends SpeakeasyBase {
    filters?: shared.Filter[];
}
export declare class SearchSessionsRequestBody extends SpeakeasyBase {
    /**
     * The search expression.
     */
    searchExpression: SearchSessionsRequestBodySearchExpression;
}
export declare class SearchSessionsRequest extends SpeakeasyBase {
    requestBody: SearchSessionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: string;
    /**
     * The maximum number of results to return per page.
     */
    maxResults?: number;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: string;
}
export declare class SearchSessionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchSessionsResponse?: shared.SearchSessionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
