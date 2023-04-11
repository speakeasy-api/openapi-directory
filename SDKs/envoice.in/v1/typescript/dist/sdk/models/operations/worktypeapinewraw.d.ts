import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WorkTypeApiNewRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiNewRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    workTypeApiNewRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    workTypeApiNewRaw200TextJSONInt32Integer?: number;
}
