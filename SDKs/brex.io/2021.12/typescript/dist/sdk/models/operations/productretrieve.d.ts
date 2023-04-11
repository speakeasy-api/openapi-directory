import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductRetrieveSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class ProductRetrieveRequest extends SpeakeasyBase {
    /**
     * ID of the ProductOrder as returned from a /product/buy call - 32 character hex value
     */
    orderId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductRetrieveDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class ProductRetrieve200ApplicationJson2 extends SpeakeasyBase {
    data: Record<string, any>;
    mimeType: string;
    productOrderId: string;
    uri: string;
}
export declare class ProductRetrieve200ApplicationJson1 extends SpeakeasyBase {
    childOrders?: string[];
    data?: string;
    mimeType: string;
    productOrderId: string;
    uri: string;
}
export declare class ProductRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Details for retrieval of a delivered product
     */
    productRetrieve200ApplicationJSONOneOf?: any;
    /**
     * Detailed information about the error
     */
    productRetrieveDefaultApplicationJSONObject?: ProductRetrieveDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
