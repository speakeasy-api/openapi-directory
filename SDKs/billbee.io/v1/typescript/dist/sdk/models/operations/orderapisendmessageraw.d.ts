import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiSendMessageRawRequest extends SpeakeasyBase {
    /**
     * The message model
     */
    requestBody: Uint8Array;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiSendMessageRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiSendMessageRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiSendMessageRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
