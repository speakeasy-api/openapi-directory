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
     * Caste Certificate
     *
     * @remarks
     * API to verify Caste Certificate.
     */
    ctcer(req: operations.CtcerRequestBody, security: operations.CtcerSecurity, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * Death Certificate
     *
     * @remarks
     * API to verify Death Certificate.
     */
    dtcer(req: operations.DtcerRequestBody, security: operations.DtcerSecurity, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * Economically Weaker Section Certificate
     *
     * @remarks
     * API to verify Economically Weaker Section Certificate.
     */
    ewcer(req: operations.EwcerRequestBody, security: operations.EwcerSecurity, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * Residence Certificate
     *
     * @remarks
     * API to verify Residence Certificate.
     */
    rscer(req: operations.RscerRequestBody, security: operations.RscerSecurity, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
}
