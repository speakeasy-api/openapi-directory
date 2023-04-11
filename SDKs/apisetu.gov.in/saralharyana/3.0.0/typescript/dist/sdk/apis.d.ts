import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * NAC/Birth/Death Certificate
     *
     * @remarks
     * API to verify NAC/Birth/Death Certificate.
     */
    nbcer(req: operations.NbcerRequestBody, security: operations.NbcerSecurity, config?: AxiosRequestConfig): Promise<operations.NbcerResponse>;
}
