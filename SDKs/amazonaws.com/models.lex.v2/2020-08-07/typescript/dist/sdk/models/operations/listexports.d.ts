import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Provides information about sorting a list of exports.
 */
export declare class ListExportsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.ExportSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListExportsRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier that Amazon Lex assigned to the bot.
     */
    botId?: string;
    /**
     * The version of the bot to list exports for.
     */
    botVersion?: string;
    /**
     * Provides the specification of a filter used to limit the exports in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
     */
    filters?: shared.ExportFilter[];
    /**
     * Specifies the resources that should be exported. If you don't specify a resource type in the <code>filters</code> parameter, both bot locales and custom vocabularies are exported.
     */
    localeId?: string;
    /**
     * The maximum number of exports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * <p>If the response from the <code>ListExports</code> operation contains more results that specified in the <code>maxResults</code> parameter, a token is returned in the response. </p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListExports</code> request to return the next page of results. For a complete set of results, call the <code>ListExports</code> operation until the <code>nextToken</code> returned in the response is null.</p>
     */
    nextToken?: string;
    /**
     * Provides information about sorting a list of exports.
     */
    sortBy?: ListExportsRequestBodySortBy;
}
export declare class ListExportsRequest extends SpeakeasyBase {
    requestBody: ListExportsRequestBody;
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
export declare class ListExportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listExportsResponse?: shared.ListExportsResponse;
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
