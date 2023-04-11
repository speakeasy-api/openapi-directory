import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyUpdateRequest extends SpeakeasyBase {
    /**
     * Public Signing Key - Authentiq ID (43 chars)
     */
    pk: string;
    /**
     * Authentiq ID to register
     */
    requestBody: Uint8Array;
}
/**
 * Successfully updated
 */
export declare class KeyUpdate200ApplicationJSON extends SpeakeasyBase {
    /**
     * confirmed
     */
    status?: string;
}
export declare class KeyUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Unknown key `unknown-key`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully updated
     */
    keyUpdate200ApplicationJSONObject?: KeyUpdate200ApplicationJSON;
}
