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
     * Class XII Passing Certificate
     *
     * @remarks
     * API to verify Class XII Passing Certificate.
     */
    hpcer(req: operations.HpcerRequestBody, security: operations.HpcerSecurity, config?: AxiosRequestConfig): Promise<operations.HpcerResponse>;
    /**
     * Class XII Marksheet
     *
     * @remarks
     * API to verify Class XII Marksheet.
     */
    hscer(req: operations.HscerRequestBody, security: operations.HscerSecurity, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * Class X Passing Certificate
     *
     * @remarks
     * API to verify Class X Passing Certificate.
     */
    spcer(req: operations.SpcerRequestBody, security: operations.SpcerSecurity, config?: AxiosRequestConfig): Promise<operations.SpcerResponse>;
    /**
     * Class X Marksheet
     *
     * @remarks
     * API to verify Class X Marksheet.
     */
    sscer(req: operations.SscerRequestBody, security: operations.SscerSecurity, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
