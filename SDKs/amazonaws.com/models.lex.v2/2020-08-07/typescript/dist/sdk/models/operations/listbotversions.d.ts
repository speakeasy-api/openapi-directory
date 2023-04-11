import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of bot versions.
 */
export declare class ListBotVersionsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotVersionSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotVersionsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response to the <code>ListBotVersion</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of bot versions.
     */
    sortBy?: ListBotVersionsRequestBodySortBy;
}
export declare class ListBotVersionsRequest extends SpeakeasyBase {
    requestBody: ListBotVersionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot to list versions for.
     */
    botId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBotVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listBotVersionsResponse?: shared.ListBotVersionsResponse;
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
