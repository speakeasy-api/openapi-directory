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
     * PAN Verification Record
     *
     * @remarks
     * API to verify PAN Verification Record.
     */
    pancr(req: operations.PancrRequestBody, security: operations.PancrSecurity, config?: AxiosRequestConfig): Promise<operations.PancrResponse>;
}
