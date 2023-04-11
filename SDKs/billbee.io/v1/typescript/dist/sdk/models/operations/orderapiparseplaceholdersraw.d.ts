import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OrderApiParsePlaceholdersRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    /**
     * The id of the order
     */
    id: number;
}
export declare class OrderApiParsePlaceholdersRawResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    orderApiParsePlaceholdersRaw200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    orderApiParsePlaceholdersRaw200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
