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
     * Leave and License Certificate
     *
     * @remarks
     * API to verify Leave and License Certificate.
     */
    llcer(req: operations.LlcerRequestBody, security: operations.LlcerSecurity, config?: AxiosRequestConfig): Promise<operations.LlcerResponse>;
}
