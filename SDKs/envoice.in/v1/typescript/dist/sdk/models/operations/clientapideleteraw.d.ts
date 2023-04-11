import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClientApiDeleteRawRequest extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ClientApiDeleteRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * OK
     */
    clientApiDeleteRaw200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    clientApiDeleteRaw200TextJSONInt32Integer?: number;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
