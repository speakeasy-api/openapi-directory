import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReadinglistRequest extends SpeakeasyBase {
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
}
export declare class GetReadinglistResponse extends SpeakeasyBase {
    /**
     * A list of articles in the users readinglist
     */
    articleIndices?: shared.ArticleIndex[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
