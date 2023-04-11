import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductCatalogSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductCatalogRequest extends SpeakeasyBase {
    /**
     * two letter country code in upper case
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductCatalogDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product with details like URI to purchase it
 */
export declare class ProductCatalog200ApplicationJSON extends SpeakeasyBase {
    countryCode?: string;
    description?: string;
    form?: string;
    method?: string;
    name?: string;
    price?: number;
    sku?: string;
    url: string;
}
export declare class ProductCatalogResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product with details like URI to purchase it
     */
    productCatalog200ApplicationJSONObject?: ProductCatalog200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productCatalogDefaultApplicationJSONObject?: ProductCatalogDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
