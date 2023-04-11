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
     * Economically Backward In General Caste Certificate
     *
     * @remarks
     * API to verify Economically Backward In General Caste Certificate.
     */
    egcer(req: operations.EgcerRequestBody, security: operations.EgcerSecurity, config?: AxiosRequestConfig): Promise<operations.EgcerResponse>;
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
     * Legal Heir Certificate
     *
     * @remarks
     * API to verify Legal Heir Certificate.
     */
    lhcer(req: operations.LhcerRequestBody, security: operations.LhcerSecurity, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
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
