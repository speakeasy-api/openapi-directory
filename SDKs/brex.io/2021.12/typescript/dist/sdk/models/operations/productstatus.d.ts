import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductStatusSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductStatusRequest extends SpeakeasyBase {
    /**
     * ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
     */
    orderId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductStatusDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductStatus200ApplicationJSON extends SpeakeasyBase {
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
export declare class ProductStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productStatus200ApplicationJSONObject?: ProductStatus200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productStatusDefaultApplicationJSONObject?: ProductStatusDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
