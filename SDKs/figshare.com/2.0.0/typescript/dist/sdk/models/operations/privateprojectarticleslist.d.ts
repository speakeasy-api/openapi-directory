import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectArticlesListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectArticlesListRequest extends SpeakeasyBase {
    /**
     * Number of results included on a page. Used for pagination with query
     */
    limit?: number;
    /**
     * Where to start the listing(the offset of the first result). Used for pagination with limit
     */
    offset?: number;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectArticlesListResponse extends SpeakeasyBase {
    /**
     * OK. List of articles
     */
    articles?: shared.Article[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
