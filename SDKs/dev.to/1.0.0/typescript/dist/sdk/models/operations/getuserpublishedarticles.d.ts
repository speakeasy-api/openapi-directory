import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPublishedArticlesRequest extends SpeakeasyBase {
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
}
export declare class GetUserPublishedArticlesResponse extends SpeakeasyBase {
    /**
     * A List of the authenticated user's Articles
     */
    articleIndices?: shared.ArticleIndex[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
