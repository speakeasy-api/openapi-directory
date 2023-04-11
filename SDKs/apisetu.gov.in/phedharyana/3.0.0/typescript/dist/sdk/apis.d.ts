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
     * Enlistment Certificate
     *
     * @remarks
     * API to verify Enlistment Certificate.
     */
    etcer(req: operations.EtcerRequestBody, security: operations.EtcerSecurity, config?: AxiosRequestConfig): Promise<operations.EtcerResponse>;
    /**
     * ID Card
     *
     * @remarks
     * API to verify ID Card.
     */
    govid(req: operations.GovidRequestBody, security: operations.GovidSecurity, config?: AxiosRequestConfig): Promise<operations.GovidResponse>;
    /**
     * Sanction Letter/ Certificate
     *
     * @remarks
     * API to verify Sanction Letter/ Certificate.
     */
    sicer(req: operations.SicerRequestBody, security: operations.SicerSecurity, config?: AxiosRequestConfig): Promise<operations.SicerResponse>;
}
