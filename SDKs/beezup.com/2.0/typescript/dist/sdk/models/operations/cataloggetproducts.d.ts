import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetProductsRequest extends SpeakeasyBase {
    getProductsRequest: shared.GetProductsRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetProductsResponse extends SpeakeasyBase {
    /**
     * StoreId not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Product list
     */
    productList?: shared.ProductList;
}
