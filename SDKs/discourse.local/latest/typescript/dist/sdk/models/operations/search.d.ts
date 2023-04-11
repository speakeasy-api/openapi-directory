import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchRequest extends SpeakeasyBase {
    page?: number;
    /**
     * The query string needs to be url encoded and is made up of the following options:
     *
     * @remarks
     * - Search term. This is just a string. Usually it would be the first item in the query.
     * - `@<username>`: Use the `@` followed by the username to specify posts by this user.
     * - `#<category>`: Use the `#` followed by the category slug to search within this category.
     * - `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.
     * - `before:`: `yyyy-mm-dd`
     * - `after:`: `yyyy-mm-dd`
     * - `order:`: `latest`, `likes`, `views`, `latest_topic`
     * - `assigned:`: username (without `@`)
     * - `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`
     * - `with:`: `images`
     * - `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`
     * - `group:`: group_name or group_id
     * - `group_messages:`: group_name or group_id
     * - `min_posts:`: 1
     * - `max_posts:`: 10
     * - `min_views:`: 1
     * - `max_views:`: 10
     *
     * If you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:
     *
     * ```
     * curl -i -sS -X GET -G "http://localhost:4200/search.json" \
     * --data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'
     * ```
     *
     */
    q?: string;
}
export declare class Search200ApplicationJSONGroupedSearchResult extends SpeakeasyBase {
    canCreateTopic: boolean;
    categoryIds: any[];
    error: string;
    groupIds: any[];
    moreCategories: string;
    moreFullPageResults: string;
    morePosts: string;
    moreUsers: string;
    postIds: any[];
    searchLogId: number;
    tagIds: any[];
    term: string;
    userIds: any[];
}
/**
 * success response
 */
export declare class Search200ApplicationJSON extends SpeakeasyBase {
    categories: any[];
    groupedSearchResult: Search200ApplicationJSONGroupedSearchResult;
    groups: any[];
    posts: any[];
    tags: any[];
    users: any[];
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    search200ApplicationJSONObject?: Search200ApplicationJSON;
}
