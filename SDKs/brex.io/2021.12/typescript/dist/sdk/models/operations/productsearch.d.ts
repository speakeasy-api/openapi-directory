import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductSearchSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductSearchRequest extends SpeakeasyBase {
    /**
     * Subject (e.g. Company) ID - 32 character hex value
     */
    subjectId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductSearchDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class ProductSearch200ApplicationJSON extends SpeakeasyBase {
    availability?: string;
    category?: string;
    countryCode?: string;
    description?: string;
    hasOptions?: boolean;
    options?: string[];
    price?: number;
    provider?: string;
    sku?: string;
    type?: string;
}
export declare class ProductSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of products
     */
    productSearch200ApplicationJSONObjects?: ProductSearch200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    productSearchDefaultApplicationJSONObject?: ProductSearchDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
