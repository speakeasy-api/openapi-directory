import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Provides parameters for setting the time window and duration for aggregating utterance data.
 */
export declare class ListAggregatedUtterancesRequestBodyAggregationDuration extends SpeakeasyBase {
    relativeAggregationDuration?: shared.RelativeAggregationDuration;
}
/**
 * Specifies attributes for sorting a list of utterances.
 */
export declare class ListAggregatedUtterancesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.AggregatedUtterancesSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListAggregatedUtterancesRequestBody extends SpeakeasyBase {
    /**
     * Provides parameters for setting the time window and duration for aggregating utterance data.
     */
    aggregationDuration: ListAggregatedUtterancesRequestBodyAggregationDuration;
    /**
     * The identifier of the bot alias associated with this request. If you specify the bot alias, you can't specify the bot version.
     */
    botAliasId?: string;
    /**
     * The identifier of the bot version associated with this request. If you specify the bot version, you can't specify the bot alias.
     */
    botVersion?: string;
    /**
     * Provides the specification of a filter used to limit the utterances in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
     */
    filters?: shared.AggregatedUtterancesFilter[];
    /**
     * The identifier of the language and locale where the utterances were collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
    /**
     * The maximum number of utterances to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned. If you don't specify the <code>maxResults</code> parameter, 1,000 results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the <code>ListAggregatedUtterances</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of utterances.
     */
    sortBy?: ListAggregatedUtterancesRequestBodySortBy;
}
export declare class ListAggregatedUtterancesRequest extends SpeakeasyBase {
    requestBody: ListAggregatedUtterancesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot associated with this request.
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
export declare class ListAggregatedUtterancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAggregatedUtterancesResponse?: shared.ListAggregatedUtterancesResponse;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
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
