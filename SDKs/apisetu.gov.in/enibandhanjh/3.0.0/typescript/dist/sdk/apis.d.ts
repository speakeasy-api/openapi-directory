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
     * Copy of Registered Deed
     *
     * @remarks
     * API to verify Copy of Registered Deed.
     */
    rdcer(req: operations.RdcerRequestBody, security: operations.RdcerSecurity, config?: AxiosRequestConfig): Promise<operations.RdcerResponse>;
    /**
     * ROR Register 2
     *
     * @remarks
     * API to verify ROR Register 2.
     */
    regrii(req: operations.RegriiRequestBody, security: operations.RegriiSecurity, config?: AxiosRequestConfig): Promise<operations.RegriiResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
}
