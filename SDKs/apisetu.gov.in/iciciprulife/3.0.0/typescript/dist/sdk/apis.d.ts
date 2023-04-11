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
     * Insurance Policy - Life
     *
     * @remarks
     * API to verify Insurance Policy - Life.
     */
    licer(req: operations.LicerRequestBody, security: operations.LicerSecurity, config?: AxiosRequestConfig): Promise<operations.LicerResponse>;
}
