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
     * No Dues/ Objection Certificate
     *
     * @remarks
     * API to verify No Dues/ Objection Certificate.
     */
    ndcer(req: operations.NdcerRequestBody, security: operations.NdcerSecurity, config?: AxiosRequestConfig): Promise<operations.NdcerResponse>;
}
