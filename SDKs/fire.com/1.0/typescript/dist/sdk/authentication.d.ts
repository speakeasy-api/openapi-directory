import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Authentication {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * authenticate - Authenticate with the API.
     *
     * Authenticate with the API.
    **/
    authenticate(req: operations.AuthenticateRequest, config?: AxiosRequestConfig): Promise<operations.AuthenticateResponse>;
}
