import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Successfully registered
 */
export declare class KeyRegister201ApplicationJSON extends SpeakeasyBase {
    /**
     * revoke key
     */
    secret?: string;
    /**
     * registered
     */
    status?: string;
}
export declare class KeyRegisterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Key already registered `duplicate-key`
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully registered
     */
    keyRegister201ApplicationJSONObject?: KeyRegister201ApplicationJSON;
}
