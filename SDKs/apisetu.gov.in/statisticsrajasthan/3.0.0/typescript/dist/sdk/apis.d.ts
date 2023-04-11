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
     * Birth Certificate
     *
     * @remarks
     * API to verify Birth Certificate.
     */
    btcer(req: operations.BtcerRequestBody, security: operations.BtcerSecurity, config?: AxiosRequestConfig): Promise<operations.BtcerResponse>;
    /**
     * Death Certificate
     *
     * @remarks
     * API to verify Death Certificate.
     */
    dtcer(req: operations.DtcerRequestBody, security: operations.DtcerSecurity, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
}
