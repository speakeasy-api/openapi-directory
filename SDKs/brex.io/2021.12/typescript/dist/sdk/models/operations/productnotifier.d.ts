import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductNotifierSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductNotifierRequest extends SpeakeasyBase {
    /**
     * ID of the ProductOrderNotifier as returned from a /notifier POST call - 32 character hex value
     */
    notifierId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductNotifierDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Details of configured product order notification
 */
export declare class ProductNotifier200ApplicationJSON extends SpeakeasyBase {
    callback: string;
    identity?: string;
    lastCallTime: Date;
    lastResponseCode: number;
    notifierType: string;
    productOrderIdentity: string;
}
export declare class ProductNotifierResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of configured product order notification
     */
    productNotifier200ApplicationJSONObject?: ProductNotifier200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productNotifierDefaultApplicationJSONObject?: ProductNotifierDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
