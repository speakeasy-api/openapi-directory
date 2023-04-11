import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductUpdateActionSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Parameters for the update order endpoint
 */
export declare class ProductUpdateActionRequestBody extends SpeakeasyBase {
    /**
     * Specify an amount of credits which should be added to the order
     */
    credits?: number;
}
export declare class ProductUpdateActionRequest extends SpeakeasyBase {
    /**
     * Parameters for the update order endpoint
     */
    requestBody?: ProductUpdateActionRequestBody;
    /**
     * The action you want to perform for the order
     */
    action: string;
    /**
     * ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
     */
    orderId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductUpdateActionDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductUpdateAction200ApplicationJSON extends SpeakeasyBase {
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
export declare class ProductUpdateActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productUpdateAction200ApplicationJSONObject?: ProductUpdateAction200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productUpdateActionDefaultApplicationJSONObject?: ProductUpdateActionDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
