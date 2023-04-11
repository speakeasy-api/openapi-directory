import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxApiDeleteRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiDeleteRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taxApiDeleteRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    taxApiDeleteRaw200TextJSONInt32Integer?: number;
}
