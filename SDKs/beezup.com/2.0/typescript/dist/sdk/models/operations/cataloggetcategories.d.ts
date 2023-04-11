import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetCategoriesRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts that the response will be compressed to reduce traffic size.
     */
    acceptEncoding: string[];
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetCategoriesResponse extends SpeakeasyBase {
    /**
     * StoreId not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Categories
     */
    categoryList?: shared.CategoryList;
}
