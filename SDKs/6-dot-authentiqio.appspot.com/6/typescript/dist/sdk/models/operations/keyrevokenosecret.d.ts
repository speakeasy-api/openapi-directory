import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyRevokeNosecretRequest extends SpeakeasyBase {
    /**
     * verification code sent by email
     */
    code?: string;
    /**
     * primary email associated to Key (ID)
     */
    email: string;
    /**
     * primary phone number, international representation
     */
    phone: string;
}
/**
 * Successfully deleted
 */
export declare class KeyRevokeNosecret200ApplicationJSON extends SpeakeasyBase {
    /**
     * pending or done
     */
    status?: string;
}
export declare class KeyRevokeNosecretResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Authentication error `auth-error`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully deleted
     */
    keyRevokeNosecret200ApplicationJSONObject?: KeyRevokeNosecret200ApplicationJSON;
}
