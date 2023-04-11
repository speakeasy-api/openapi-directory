import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies attributes for sorting a list of built-in slot types.
 */
export declare class ListBuiltInSlotTypesRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.BuiltInSlotTypeSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListBuiltInSlotTypesRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of built-in slot types to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * If the response from the <code>ListBuiltInSlotTypes</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response. Use that token in the <code>nextToken</code> parameter to return the next page of results.
     */
    nextToken?: string;
    /**
     * Specifies attributes for sorting a list of built-in slot types.
     */
    sortBy?: ListBuiltInSlotTypesRequestBodySortBy;
}
export declare class ListBuiltInSlotTypesRequest extends SpeakeasyBase {
    requestBody: ListBuiltInSlotTypesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
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
export declare class ListBuiltInSlotTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listBuiltInSlotTypesResponse?: shared.ListBuiltInSlotTypesResponse;
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
