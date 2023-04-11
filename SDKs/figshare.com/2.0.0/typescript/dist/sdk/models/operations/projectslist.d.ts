import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The field by which to order. Default varies by endpoint/resource.
 */
export declare enum ProjectsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}
export declare enum ProjectsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ProjectsListRequest extends SpeakeasyBase {
    /**
     * Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.
     */
    xCursor?: string;
    /**
     * only return collections from this group
     */
    group?: number;
    /**
     * only return collections from this institution
     */
    institution?: number;
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * The field by which to order. Default varies by endpoint/resource.
     */
    order?: ProjectsListOrderEnum;
    orderDirection?: ProjectsListOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
     */
    publishedSince?: string;
}
export declare class ProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK. An array of projects
     */
    projects?: shared.Project[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
