import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Key {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * HEAD info on Authentiq ID
     *
     */
    headKeyPK(req: operations.HeadKeyPKRequest, config?: AxiosRequestConfig): Promise<operations.HeadKeyPKResponse>;
    /**
     * Update Authentiq ID by replacing the object.
     *
     * v4: `JWT(sub,email,phone)` to bind email/phone hash;
     *
     * v5: POST issuer-signed email & phone scopes
     * and PUT to update registration `JWT(sub, pk, devtoken, ...)`
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    keyBind(req: operations.KeyBindRequest, config?: AxiosRequestConfig): Promise<operations.KeyBindResponse>;
    /**
     * Register a new ID `JWT(sub, devtoken)`
     *
     * v5: `JWT(sub, pk, devtoken, ...)`
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    keyRegister(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.KeyRegisterResponse>;
    /**
     * Get public details of an Authentiq ID.
     *
     */
    keyRetrieve(req: operations.KeyRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.KeyRetrieveResponse>;
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
     * update properties of an Authentiq ID.
     * (not operational in v4; use PUT for now)
     *
     * v5: POST issuer-signed email & phone scopes in
     * a self-signed JWT
     *
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    keyUpdate(req: operations.KeyUpdateRequest, config?: AxiosRequestConfig): Promise<operations.KeyUpdateResponse>;
}
