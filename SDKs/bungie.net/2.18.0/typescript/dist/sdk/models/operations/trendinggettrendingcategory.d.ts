import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrendingGetTrendingCategoryRequest extends SpeakeasyBase {
    /**
     * The ID of the category for whom you want additional results.
     */
    categoryId: string;
    /**
     * The page # of results to return.
     */
    pageNumber: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class TrendingGetTrendingCategory200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SearchResultOfTrendingEntry;
    throttleSeconds?: number;
}
export declare class TrendingGetTrendingCategoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
