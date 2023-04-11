import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiChangeShippingDetailsRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    orderId: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeShippingDetailsRawResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
