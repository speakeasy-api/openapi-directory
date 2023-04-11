import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about user_cipher_uses
 */
export declare class UserCipherUses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List User Cipher Uses
     *
     * @remarks
     * List User Cipher Uses
     */
    getUserCipherUses(req: operations.GetUserCipherUsesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserCipherUsesResponse>;
}
