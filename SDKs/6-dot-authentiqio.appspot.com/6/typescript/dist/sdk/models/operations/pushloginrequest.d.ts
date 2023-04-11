import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PushLoginRequestRequest extends SpeakeasyBase {
    /**
     * Push Token.
     */
    requestBody: Uint8Array;
    /**
     * URI App will connect to
     */
    callback: string;
}
/**
 * Successful response
 */
export declare class PushLoginRequest200ApplicationJSON extends SpeakeasyBase {
    /**
     * sent
     */
    status?: string;
}
export declare class PushLoginRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Unauthorized for this callback audience `aud-error` or JWT should be self-signed `auth-error`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    pushLoginRequest200ApplicationJSONObject?: PushLoginRequest200ApplicationJSON;
}
