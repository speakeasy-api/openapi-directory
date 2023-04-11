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
     * Character Certificate
     *
     * @remarks
     * API to verify Character Certificate.
     */
    chcer(req: operations.ChcerRequestBody, security: operations.ChcerSecurity, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * Domicile Certificate
     *
     * @remarks
     * API to verify Domicile Certificate.
     */
    dmcer(req: operations.DmcerRequestBody, security: operations.DmcerSecurity, config?: AxiosRequestConfig): Promise<operations.DmcerResponse>;
    /**
     * Dependency Certificate
     *
     * @remarks
     * API to verify Dependency Certificate.
     */
    dpcer(req: operations.DpcerRequestBody, security: operations.DpcerSecurity, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Residence Certificate
     *
     * @remarks
     * API to verify Residence Certificate.
     */
    rscer(req: operations.RscerRequestBody, security: operations.RscerSecurity, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * SC/ST  Certificate
     *
     * @remarks
     * API to verify SC/ST  Certificate.
     */
    shcer(req: operations.ShcerRequestBody, security: operations.ShcerSecurity, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
