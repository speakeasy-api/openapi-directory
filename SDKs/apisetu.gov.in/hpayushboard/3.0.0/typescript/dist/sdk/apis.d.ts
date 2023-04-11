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
     * Pharmacist Registration Certificate
     *
     * @remarks
     * API to verify Pharmacist Registration Certificate.
     */
    phcer(req: operations.PhcerRequestBody, security: operations.PhcerSecurity, config?: AxiosRequestConfig): Promise<operations.PhcerResponse>;
    /**
     * Pharmacist Renewal certificate
     *
     * @remarks
     * API to verify Pharmacist Renewal certificate.
     */
    rpcer(req: operations.RpcerRequestBody, security: operations.RpcerSecurity, config?: AxiosRequestConfig): Promise<operations.RpcerResponse>;
}
