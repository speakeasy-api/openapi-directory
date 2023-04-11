import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignConfirmRequest extends SpeakeasyBase {
    /**
     * Job ID (20 chars)
     */
    job: string;
}
/**
 * Successfully confirmed
 */
export declare class SignConfirm202ApplicationJSON extends SpeakeasyBase {
    /**
     * confirmed
     */
    status?: string;
}
export declare class SignConfirmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Confirmation error `auth-error`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully confirmed
     */
    signConfirm202ApplicationJSONObject?: SignConfirm202ApplicationJSON;
}
