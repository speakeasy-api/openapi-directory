import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiTriggerEventRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiTriggerEventRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTriggerEventRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTriggerEventRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
