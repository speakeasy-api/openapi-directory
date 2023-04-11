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
     * List APIs
     *
     * @remarks
     * List APIs
     */
    apisAll(req: operations.ApisAllRequest, security: operations.ApisAllSecurity, config?: AxiosRequestConfig): Promise<operations.ApisAllResponse>;
    /**
     * Get API
     *
     * @remarks
     * Get API
     */
    apisOne(req: operations.ApisOneRequest, security: operations.ApisOneSecurity, config?: AxiosRequestConfig): Promise<operations.ApisOneResponse>;
}
