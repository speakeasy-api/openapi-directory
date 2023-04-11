import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of intents.
 */
export declare class ListIntentsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.IntentSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListIntentsRequestBody extends SpeakeasyBase {
    /**
     * Provides the specification of a filter used to limit the intents in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
     */
    filters?: shared.IntentFilter[];
    /**
     * The maximum number of intents to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * <p>If the response from the <code>ListIntents</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListIntents</code> request to return the next page of results. For a complete set of results, call the <code>ListIntents</code> operation until the <code>nextToken</code> returned in the response is null.</p>
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of intents.
     */
    sortBy?: ListIntentsRequestBodySortBy;
}
export declare class ListIntentsRequest extends SpeakeasyBase {
    requestBody: ListIntentsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that contains the intent.
     */
    botId: string;
    /**
     * The version of the bot that contains the intent.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale of the intents to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListIntentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listIntentsResponse?: shared.ListIntentsResponse;
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
