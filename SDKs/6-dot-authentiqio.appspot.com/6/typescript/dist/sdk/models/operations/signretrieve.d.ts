import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SignRetrieveRequest extends SpeakeasyBase {
    /**
     * Job ID (20 chars)
     */
    job: string;
}
/**
 * Successful response (JWT)
 */
export declare class SignRetrieveJWT extends SpeakeasyBase {
    exp?: number;
    field?: string;
    /**
     * base64safe encoded public signing key
     */
    sub?: string;
}
export declare class SignRetrieveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Job not found `unknown-job`
     */
    error?: shared.ErrorT;
    /**
     * Successful response (JWT)
     */
    jwt?: SignRetrieveJWT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
