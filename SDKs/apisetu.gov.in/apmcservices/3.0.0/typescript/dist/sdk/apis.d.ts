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
     * Agriculture Produce Market Committee License
     *
     * @remarks
     * API to verify Agriculture Produce Market Committee License.
     */
    apmcl(req: operations.ApmclRequestBody, security: operations.ApmclSecurity, config?: AxiosRequestConfig): Promise<operations.ApmclResponse>;
}
