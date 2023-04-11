import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignRequestRequest extends SpeakeasyBase {
    /**
     * Claims of scope
     */
    requestBody: Uint8Array;
    /**
     * test only mode, using test issuer
     */
    test?: number;
}
/**
 * Successful response
 */
export declare class SignRequest201ApplicationJSON extends SpeakeasyBase {
    /**
     * 20-character ID
     */
    job?: string;
    /**
     * waiting
     */
    status?: string;
}
export declare class SignRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Too Many Requests on same address / number `rate-limit`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    signRequest201ApplicationJSONObject?: SignRequest201ApplicationJSON;
}
