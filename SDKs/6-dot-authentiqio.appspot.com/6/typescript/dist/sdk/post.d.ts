import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Post {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
    /**
     * push sign-in request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    pushLoginRequest(req: operations.PushLoginRequestRequest, config?: AxiosRequestConfig): Promise<operations.PushLoginRequestResponse>;
    /**
     * this is a scope confirmation
     */
    signConfirm(req: operations.SignConfirmRequest, config?: AxiosRequestConfig): Promise<operations.SignConfirmResponse>;
    /**
     * scope verification request
     * See: https://github.com/skion/authentiq/wiki/JWT-Examples
     *
     */
    signRequest(req: operations.SignRequestRequest, config?: AxiosRequestConfig): Promise<operations.SignRequestResponse>;
}
