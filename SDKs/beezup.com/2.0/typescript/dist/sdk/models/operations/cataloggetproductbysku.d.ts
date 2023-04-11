import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetProductBySkuRequest extends SpeakeasyBase {
    /**
     * The product sku you want to get
     */
    sku: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetProductBySkuResponse extends SpeakeasyBase {
    /**
     * StoreId or Product not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Product
     */
    product?: shared.Product;
}
