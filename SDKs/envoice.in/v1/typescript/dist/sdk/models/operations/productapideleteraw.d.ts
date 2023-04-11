import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductApiDeleteRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiDeleteRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiDeleteRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiDeleteRaw200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
