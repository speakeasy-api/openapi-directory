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
     * Class XII Provisional Certificate
     *
     * @remarks
     * API to verify Class XII Provisional Certificate.
     */
    hvcer(req: operations.HvcerRequestBody, security: operations.HvcerSecurity, config?: AxiosRequestConfig): Promise<operations.HvcerResponse>;
    /**
     * Class X Provisional Certificate
     *
     * @remarks
     * API to verify Class X Provisional Certificate.
     */
    svcer(req: operations.SvcerRequestBody, security: operations.SvcerSecurity, config?: AxiosRequestConfig): Promise<operations.SvcerResponse>;
}
