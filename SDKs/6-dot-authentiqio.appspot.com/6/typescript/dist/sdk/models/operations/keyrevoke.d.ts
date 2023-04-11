import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyRevokeRequest extends SpeakeasyBase {
    /**
     * Public Signing Key - Authentiq ID (43 chars)
     */
    pk: string;
    /**
     * revokation secret
     */
    secret: string;
}
/**
 * Successful response
 */
export declare class KeyRevoke200ApplicationJSON extends SpeakeasyBase {
    /**
     * done
     */
    status?: string;
}
export declare class KeyRevokeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Key not found / wrong code `auth-error`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    keyRevoke200ApplicationJSONObject?: KeyRevoke200ApplicationJSON;
}
