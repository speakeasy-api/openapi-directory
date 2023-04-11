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
     * Class VIII Marksheet
     *
     * @remarks
     * API to verify Class VIII Marksheet.
     */
    cemst(req: operations.CemstRequestBody, security: operations.CemstSecurity, config?: AxiosRequestConfig): Promise<operations.CemstResponse>;
    /**
     * Class V Marksheet
     *
     * @remarks
     * API to verify Class V Marksheet.
     */
    cfmst(req: operations.CfmstRequestBody, security: operations.CfmstSecurity, config?: AxiosRequestConfig): Promise<operations.CfmstResponse>;
    /**
     * Class XII Marksheet
     *
     * @remarks
     * API to verify Class XII Marksheet.
     */
    hscer(req: operations.HscerRequestBody, security: operations.HscerSecurity, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * Migration Certificate
     *
     * @remarks
     * API to verify Migration Certificate.
     */
    micer(req: operations.MicerRequestBody, security: operations.MicerSecurity, config?: AxiosRequestConfig): Promise<operations.MicerResponse>;
    /**
     * Class X Marksheet
     *
     * @remarks
     * API to verify Class X Marksheet.
     */
    sscer(req: operations.SscerRequestBody, security: operations.SscerSecurity, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
}
