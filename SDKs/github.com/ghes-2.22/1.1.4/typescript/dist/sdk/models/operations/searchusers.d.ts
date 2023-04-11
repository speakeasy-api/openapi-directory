import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub Enterprise Server. Default: [best match](https://docs.github.com/enterprise-server@2.22/rest/reference/search#ranking-search-results)
 */
export declare enum SearchUsersSortEnum {
    Followers = "followers",
    Repositories = "repositories",
    Joined = "joined"
}
export declare class SearchUsersRequest extends SpeakeasyBase {
    /**
     * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     */
    order?: shared.OrderEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@2.22/rest/reference/search#constructing-a-search-query). See "[Searching users](https://help.github.com/articles/searching-users/)" for a detailed list of qualifiers.
     */
    q: string;
    /**
     * Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub Enterprise Server. Default: [best match](https://docs.github.com/enterprise-server@2.22/rest/reference/search#ranking-search-results)
     */
    sort?: SearchUsersSortEnum;
}
/**
 * Service unavailable
 */
export declare class SearchUsers503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
/**
 * Response
 */
export declare class SearchUsers200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.UserSearchResultItem[];
    totalCount: number;
}
export declare class SearchUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    searchUsers200ApplicationJSONObject?: SearchUsers200ApplicationJSON;
    /**
     * Service unavailable
     */
    searchUsers503ApplicationJSONObject?: SearchUsers503ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
