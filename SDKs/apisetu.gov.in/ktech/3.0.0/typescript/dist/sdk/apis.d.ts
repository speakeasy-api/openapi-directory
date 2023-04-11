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
     * Company Related Certificate
     *
     * @remarks
     * API to verify Company Related Certificate.
     */
    cocer(req: operations.CocerRequestBody, security: operations.CocerSecurity, config?: AxiosRequestConfig): Promise<operations.CocerResponse>;
    /**
     * Registration Certificate of Firm/ Company
     *
     * @remarks
     * API to verify Registration Certificate of Firm/ Company.
     */
    rfcer(req: operations.RfcerRequestBody, security: operations.RfcerSecurity, config?: AxiosRequestConfig): Promise<operations.RfcerResponse>;
}
