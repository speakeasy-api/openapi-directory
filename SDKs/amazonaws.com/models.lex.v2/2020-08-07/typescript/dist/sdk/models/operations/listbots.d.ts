import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of bots.
 */
export declare class ListBotsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotsRequestBody extends SpeakeasyBase {
    /**
     * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
     */
    filters?: shared.BotFilter[];
    /**
     * The maximum number of bots to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * <p>If the response from the <code>ListBots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListBots</code> request to return the next page of results. For a complete set of results, call the <code>ListBots</code> operation until the <code>nextToken</code> returned in the response is null.</p>
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of bots.
     */
    sortBy?: ListBotsRequestBodySortBy;
}
export declare class ListBotsRequest extends SpeakeasyBase {
    requestBody: ListBotsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBotsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listBotsResponse?: shared.ListBotsResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
