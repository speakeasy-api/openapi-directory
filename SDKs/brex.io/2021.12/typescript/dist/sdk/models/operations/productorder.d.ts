import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductOrderSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductOrderRequest extends SpeakeasyBase {
    /**
     * SKU - 9 character value from a Product object
     */
    sku: string;
    /**
     * Subject (e.g. Company) ID - 32 character hex value
     */
    subjectId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductOrderDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductOrder200ApplicationJSON extends SpeakeasyBase {
    identity: string;
    option: string;
    ordered: Date;
    owner: string;
    price: number;
    sku: string;
    status: string;
    subjectId: string;
    subjectValue: string;
}
export declare class ProductOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productOrder200ApplicationJSONObject?: ProductOrder200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productOrderDefaultApplicationJSONObject?: ProductOrderDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
