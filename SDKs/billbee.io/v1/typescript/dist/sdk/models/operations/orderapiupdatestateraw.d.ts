import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiUpdateStateRawRequest extends SpeakeasyBase {
    /**
     * The data used to change the state
     */
    requestBody: Uint8Array;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiUpdateStateRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiUpdateStateRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiUpdateStateRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
