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
     * Vocational Higher Secondary
     *
     * @remarks
     * API to verify Vocational Higher Secondary.
     */
    vochse(req: operations.VochseRequestBody, security: operations.VochseSecurity, config?: AxiosRequestConfig): Promise<operations.VochseResponse>;
}
