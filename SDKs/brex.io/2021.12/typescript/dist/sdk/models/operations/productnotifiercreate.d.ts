import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductNotifierCreateSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductNotifierCreateRequest extends SpeakeasyBase {
    /**
     * ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
     */
    orderId: string;
    /**
     * Type of the notifier - indicates the action the notifier will perform. Currently GET and POST are supported which performs an http(s) GET/POST to the supplied uri with appended notifierId= and orderId= parameters when the order processing is completed. Upon the POST request the order object is sent as a JSON body
     */
    type: string;
    /**
     * URI of the notifier for the 'complete' action. Currently only a GET method HTTP(s) URL is supported. 1 to 250 characters long. Every slash in the URI must be replaced by a ~
     */
    uri: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductNotifierCreateDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Details of configured product order notification
 */
export declare class ProductNotifierCreate200ApplicationJSON extends SpeakeasyBase {
    callback: string;
    identity?: string;
    lastCallTime: Date;
    lastResponseCode: number;
    notifierType: string;
    productOrderIdentity: string;
}
export declare class ProductNotifierCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of configured product order notification
     */
    productNotifierCreate200ApplicationJSONObject?: ProductNotifierCreate200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productNotifierCreateDefaultApplicationJSONObject?: ProductNotifierCreateDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
