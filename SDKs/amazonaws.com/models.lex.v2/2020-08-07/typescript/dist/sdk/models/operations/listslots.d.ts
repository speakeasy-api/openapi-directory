import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of bots.
 */
export declare class ListSlotsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.SlotSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListSlotsRequestBody extends SpeakeasyBase {
    /**
     * Provides the specification of a filter used to limit the slots in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
     */
    filters?: shared.SlotFilter[];
    /**
     * The maximum number of slots to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the <code>ListSlots</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of bots.
     */
    sortBy?: ListSlotsRequestBodySortBy;
}
export declare class ListSlotsRequest extends SpeakeasyBase {
    requestBody: ListSlotsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot that contains the slot.
     */
    botId: string;
    /**
     * The version of the bot that contains the slot.
     */
    botVersion: string;
    /**
     * The unique identifier of the intent that contains the slot.
     */
    intentId: string;
    /**
     * The identifier of the language and locale of the slots to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
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
export declare class ListSlotsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSlotsResponse?: shared.ListSlotsResponse;
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
