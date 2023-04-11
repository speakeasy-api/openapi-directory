import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Provides information for sorting a list of imports.
 */
export declare class ListImportsRequestBodySortBy extends SpeakeasyBase {
    attribute?: shared.ImportSortAttributeEnum;
    order?: shared.SortOrderEnum;
}
export declare class ListImportsRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier that Amazon Lex assigned to the bot.
     */
    botId?: string;
    /**
     * The version of the bot to list imports for.
     */
    botVersion?: string;
    /**
     * Provides the specification of a filter used to limit the bots in the response to only those that match the filter specification. You can only specify one filter and one string to filter on.
     */
    filters?: shared.ImportFilter[];
    /**
     * Specifies the locale that should be present in the list. If you don't specify a resource type in the <code>filters</code> parameter, the list contains both bot locales and custom vocabularies.
     */
    localeId?: string;
    /**
     * The maximum number of imports to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
     */
    maxResults?: number;
    /**
     * <p>If the response from the <code>ListImports</code> operation contains more results than specified in the <code>maxResults</code> parameter, a token is returned in the response.</p> <p>Use the returned token in the <code>nextToken</code> parameter of a <code>ListImports</code> request to return the next page of results. For a complete set of results, call the <code>ListImports</code> operation until the <code>nextToken</code> returned in the response is null.</p>
     */
    nextToken?: string;
    /**
     * Provides information for sorting a list of imports.
     */
    sortBy?: ListImportsRequestBodySortBy;
}
export declare class ListImportsRequest extends SpeakeasyBase {
    requestBody: ListImportsRequestBody;
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
export declare class ListImportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listImportsResponse?: shared.ListImportsResponse;
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
