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
     * Degree/ Diploma Certificate
     *
     * @remarks
     * API to verify Degree/ Diploma Certificate.
     */
    dgcer(req: operations.DgcerRequestBody, security: operations.DgcerSecurity, config?: AxiosRequestConfig): Promise<operations.DgcerResponse>;
    /**
     * Degree/ Diploma Marksheet
     *
     * @remarks
     * API to verify Degree/ Diploma Marksheet.
     */
    dgmst(req: operations.DgmstRequestBody, security: operations.DgmstSecurity, config?: AxiosRequestConfig): Promise<operations.DgmstResponse>;
}
