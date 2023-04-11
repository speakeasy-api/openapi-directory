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
     * Domicile Certificate
     *
     * @remarks
     * API to verify Domicile Certificate.
     */
    dmcer(req: operations.DmcerRequestBody, security: operations.DmcerSecurity, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * Disabled Person Identity Card/ Certificate
     *
     * @remarks
     * API to verify Disabled Person Identity Card/ Certificate.
     */
    dpicr(req: operations.DpicrRequestBody, security: operations.DpicrSecurity, config?: AxiosRequestConfig): Promise<operations.DpicrResponse>;
    /**
     * Death Certificate
     *
     * @remarks
     * API to verify Death Certificate.
     */
    dtcer(req: operations.DtcerRequestBody, security: operations.DtcerSecurity, config?: AxiosRequestConfig): Promise<operations.DtcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
}
