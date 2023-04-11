import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Game Credentials Rest V 2 Controller
 */
export declare class Credentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Resets the secret of a credential
     */
    updateCredentialSecretUsingPOST(req: operations.UpdateCredentialSecretUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialSecretUsingPOSTResponse>;
}
