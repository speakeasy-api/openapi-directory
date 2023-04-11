import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClientApiNewRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiNewRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiNewRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiNewRaw200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
