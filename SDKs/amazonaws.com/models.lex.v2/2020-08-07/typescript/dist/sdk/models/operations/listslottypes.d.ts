import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of slot types.
 */
export declare class ListSlotTypesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.SlotTypeSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListSlotTypesRequestBody extends SpeakeasyBase {
    /**
     * Provides the specification of a filter used to limit the slot types in the response to only those that match the filter specification. You can only specify one filter and only one string to filter on.
     */
    filters?: shared.SlotTypeFilter[];
    /**
     * The maximum number of slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the <code>ListSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of slot types.
     */
    sortBy?: ListSlotTypesRequestBodySortBy;
}
export declare class ListSlotTypesRequest extends SpeakeasyBase {
    requestBody: ListSlotTypesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that contains the slot types.
     */
    botId: string;
    /**
     * The version of the bot that contains the slot type.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale of the slot types to list. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
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
export declare class ListSlotTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSlotTypesResponse?: shared.ListSlotTypesResponse;
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
