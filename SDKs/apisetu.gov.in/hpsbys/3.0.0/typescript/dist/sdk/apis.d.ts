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
     * Health Card/ Certificate
     *
     * @remarks
     * API to verify Health Card/ Certificate.
     */
    rsbyc(req: operations.RsbycRequestBody, security: operations.RsbycSecurity, config?: AxiosRequestConfig): Promise<operations.RsbycResponse>;
}
