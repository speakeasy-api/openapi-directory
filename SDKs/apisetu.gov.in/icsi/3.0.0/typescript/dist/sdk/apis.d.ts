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
     * ID Card
     *
     * @remarks
     * API to verify ID Card.
     */
    govid(req: operations.GovidRequestBody, security: operations.GovidSecurity, config?: AxiosRequestConfig): Promise<operations.GovidResponse>;
    /**
     * Membership Certificate
     *
     * @remarks
     * API to verify Membership Certificate.
     */
    mbcer(req: operations.MbcerRequestBody, security: operations.MbcerSecurity, config?: AxiosRequestConfig): Promise<operations.MbcerResponse>;
}
