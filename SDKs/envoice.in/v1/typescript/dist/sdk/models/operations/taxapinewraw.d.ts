import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxApiNewRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiNewRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiNewRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiNewRaw200TextJSONInt32Integer?: number;
}
