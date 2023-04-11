import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of bot locales.
 */
export declare class ListBotLocalesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BotLocaleSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBotLocalesRequestBody extends SpeakeasyBase {
    /**
     * Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.
     */
    filters?: shared.BotLocaleFilter[];
    /**
     * The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the <code>ListBotLocales</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token as the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of bot locales.
     */
    sortBy?: ListBotLocalesRequestBodySortBy;
}
export declare class ListBotLocalesRequest extends SpeakeasyBase {
    requestBody: ListBotLocalesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot to list locales for.
     */
    botId: string;
    /**
     * The version of the bot to list locales for.
     */
    botVersion: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBotLocalesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listBotLocalesResponse?: shared.ListBotLocalesResponse;
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
