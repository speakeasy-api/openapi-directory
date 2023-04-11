import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * The field by which to order. Default varies by endpoint/resource.
 */
export declare enum PrivateCollectionsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}
export declare enum PrivateCollectionsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class PrivateCollectionsListRequest extends SpeakeasyBase {
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
    order?: PrivateCollectionsListOrderEnum;
    orderDirection?: PrivateCollectionsListOrderDirectionEnum;
    /**
     * Page number. Used for pagination with page_size
     */
    page?: number;
    /**
     * The number of results included on a page. Used for pagination with page
     */
    pageSize?: number;
}
export declare class PrivateCollectionsListResponse extends SpeakeasyBase {
    /**
     * OK. An array of collections
     */
    collections?: shared.Collection[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
