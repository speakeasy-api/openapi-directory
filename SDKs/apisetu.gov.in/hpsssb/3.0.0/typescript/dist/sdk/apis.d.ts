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
     * Admit Card
     *
     * @remarks
     * API to verify Admit Card.
     */
    adcrd(req: operations.AdcrdRequestBody, security: operations.AdcrdSecurity, config?: AxiosRequestConfig): Promise<operations.AdcrdResponse>;
}
