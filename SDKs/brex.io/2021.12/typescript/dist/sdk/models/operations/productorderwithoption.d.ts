import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductOrderWithOptionSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductOrderWithOptionRequest extends SpeakeasyBase {
    /**
     * Product option (e.g. Accounts year) from a previous Availability call
     */
    option: string;
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
export declare class ProductOrderWithOptionDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductOrderWithOption200ApplicationJSON extends SpeakeasyBase {
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
export declare class ProductOrderWithOptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productOrderWithOption200ApplicationJSONObject?: ProductOrderWithOption200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productOrderWithOptionDefaultApplicationJSONObject?: ProductOrderWithOptionDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
