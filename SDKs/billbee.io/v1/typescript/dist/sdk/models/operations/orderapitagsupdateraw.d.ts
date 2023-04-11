import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsUpdateRawRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    requestBody: Uint8Array;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsUpdateRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsUpdateRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsUpdateRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
