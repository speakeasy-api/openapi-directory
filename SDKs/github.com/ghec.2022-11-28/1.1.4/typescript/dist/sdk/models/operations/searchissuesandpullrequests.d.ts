import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#ranking-search-results)
 */
export declare enum SearchIssuesAndPullRequestsSortEnum {
    Comments = "comments",
    Reactions = "reactions",
    ReactionsPlus1 = "reactions-+1",
    Reactions1 = "reactions--1",
    ReactionsSmile = "reactions-smile",
    ReactionsThinkingFace = "reactions-thinking_face",
    ReactionsHeart = "reactions-heart",
    ReactionsTada = "reactions-tada",
    Interactions = "interactions",
    Created = "created",
    Updated = "updated"
}
export declare class SearchIssuesAndPullRequestsRequest extends SpeakeasyBase {
    /**
     * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     */
    order?: shared.OrderEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Cloud. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Cloud. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/enterprise-cloud@latest//search-github/searching-on-github/searching-issues-and-pull-requests)" for a detailed list of qualifiers.
     */
    q: string;
    /**
     * Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/enterprise-cloud@latest//rest/reference/search#ranking-search-results)
     */
    sort?: SearchIssuesAndPullRequestsSortEnum;
}
/**
 * Service unavailable
 */
export declare class SearchIssuesAndPullRequests503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
/**
 * Response
 */
export declare class SearchIssuesAndPullRequests200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.IssueSearchResultItem[];
    totalCount: number;
}
export declare class SearchIssuesAndPullRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    searchIssuesAndPullRequests200ApplicationJSONObject?: SearchIssuesAndPullRequests200ApplicationJSON;
    /**
     * Service unavailable
     */
    searchIssuesAndPullRequests503ApplicationJSONObject?: SearchIssuesAndPullRequests503ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
