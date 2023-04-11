import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Using this parameter will allow the client to check which articles are fresh or rising.
 *
 * @remarks
 *             If `state=fresh` the server will return fresh articles.
 *             If `state=rising` the server will return rising articles.
 *             This param can be used in conjuction with `username`, only if set to `all`.
 */
export declare enum GetArticlesStateEnum {
    Fresh = "fresh",
    Rising = "rising",
    All = "all"
}
export declare class GetArticlesRequest extends SpeakeasyBase {
    /**
     * Adding this will allow the client to return the list of articles
     *
     * @remarks
     * belonging to the requested collection, ordered by ascending publication date.
     */
    collectionId?: number;
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
    /**
     * Using this parameter will allow the client to check which articles are fresh or rising.
     *
     * @remarks
     *             If `state=fresh` the server will return fresh articles.
     *             If `state=rising` the server will return rising articles.
     *             This param can be used in conjuction with `username`, only if set to `all`.
     */
    state?: GetArticlesStateEnum;
    /**
     * Using this parameter will retrieve articles that contain the requested tag. Articles
     *
     * @remarks
     * will be ordered by descending popularity.This parameter can be used in conjuction with `top`.
     */
    tag?: string;
    /**
     * Using this parameter will retrieve articles with any of the comma-separated tags.
     *
     * @remarks
     * Articles will be ordered by descending popularity.
     */
    tags?: string;
    /**
     * Using this parameter will retrieve articles that do _not_ contain _any_
     *
     * @remarks
     * of comma-separated tags. Articles will be ordered by descending popularity.
     */
    tagsExclude?: string;
    /**
     * Using this parameter will allow the client to return the most popular articles
     *
     * @remarks
     * in the last `N` days.
     * `top` indicates the number of days since publication of the articles returned.
     * This param can be used in conjuction with `tag`.
     */
    top?: number;
    /**
     * Using this parameter will retrieve articles belonging
     *
     * @remarks
     *             to a User or Organization ordered by descending publication date.
     *             If `state=all` the number of items returned will be `1000` instead of the default `30`.
     *             This parameter can be used in conjuction with `state`.
     */
    username?: string;
}
export declare class GetArticlesResponse extends SpeakeasyBase {
    /**
     * A List of Articles
     */
    articleIndices?: shared.ArticleIndex[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
