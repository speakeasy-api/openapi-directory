import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KeyRetrieveRequest extends SpeakeasyBase {
    /**
     * Public Signing Key - Authentiq ID (43 chars)
     */
    pk: string;
}
/**
 * Successfully retrieved
 */
export declare class KeyRetrieveJWT extends SpeakeasyBase {
    since?: Date;
    status?: string;
    /**
     * base64safe encoded public signing key
     */
    sub?: string;
}
export declare class KeyRetrieveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Unknown key `unknown-key`
     */
    error?: shared.ErrorT;
    /**
     * Successfully retrieved
     */
    jwt?: KeyRetrieveJWT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
