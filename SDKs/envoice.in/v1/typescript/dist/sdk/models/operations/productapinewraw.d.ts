import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductApiNewRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiNewRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiNewRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiNewRaw200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
