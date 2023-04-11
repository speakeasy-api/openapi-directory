import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchWorkspaceRequest extends SpeakeasyBase {
    /**
     * Which page of the search results to retrieve
     */
    page?: number;
    /**
     * How many search results to retrieve per page
     */
    pagelen?: number;
    /**
     * The search query
     */
    searchQuery: string;
    /**
     * The workspace to search in; either the slug or the UUID in curly braces
     */
    workspace: string;
}
export declare class SearchWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the search request was invalid due to one of the
     *
     * @remarks
     * following reasons:
     *
     * * the specified type of target account doesn''t match the actual
     * account type;
     *
     * * malformed pagination properties;
     *
     * * missing or malformed search query, in the latter case an error
     * key will be returned in `error.data.key` property.
     *
     */
    error?: Record<string, any>;
    /**
     * Successful search
     */
    searchResultPage?: shared.SearchResultPage;
}
