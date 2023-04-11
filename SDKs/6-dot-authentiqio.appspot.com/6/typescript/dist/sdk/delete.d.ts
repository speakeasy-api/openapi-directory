import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Delete {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Revoke an Identity (Key) with a revocation secret
     */
    keyRevoke(req: operations.KeyRevokeRequest, config?: AxiosRequestConfig): Promise<operations.KeyRevokeResponse>;
    /**
     * Revoke an Authentiq ID using email & phone.
     *
     * If called with `email` and `phone` only, a verification code
     * will be sent by email. Do a second call adding `code` to
     * complete the revocation.
     *
     */
    keyRevokeNosecret(req: operations.KeyRevokeNosecretRequest, config?: AxiosRequestConfig): Promise<operations.KeyRevokeNosecretResponse>;
    /**
     * delete a verification job
     */
    signDelete(req: operations.SignDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SignDeleteResponse>;
}
