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
     * Provisional Certificate
     *
     * @remarks
     * API to verify Provisional Certificate.
     */
    pvcer(req: operations.PvcerRequestBody, security: operations.PvcerSecurity, config?: AxiosRequestConfig): Promise<operations.PvcerResponse>;
}
