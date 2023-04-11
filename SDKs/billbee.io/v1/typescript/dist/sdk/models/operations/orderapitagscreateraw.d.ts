import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiTagsCreateRawRequest extends SpeakeasyBase {
    /**
     * Tags to attach
     */
    requestBody: Uint8Array;
    /**
     * The internal id of the order
     */
    id: number;
}
export declare class OrderApiTagsCreateRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiTagsCreateRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiTagsCreateRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
