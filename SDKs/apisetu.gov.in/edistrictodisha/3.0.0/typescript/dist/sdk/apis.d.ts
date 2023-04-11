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
     * Caste Certificate
     *
     * @remarks
     * API to verify Caste Certificate.
     */
    ctcer(req: operations.CtcerRequestBody, security: operations.CtcerSecurity, config?: AxiosRequestConfig): Promise<operations.CtcerResponse>;
    /**
     * Economically Weaker Section Certificate
     *
     * @remarks
     * API to verify Economically Weaker Section Certificate.
     */
    ewcer(req: operations.EwcerRequestBody, security: operations.EwcerSecurity, config?: AxiosRequestConfig): Promise<operations.EwcerResponse>;
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
     * Records of Rights
     *
     * @remarks
     * API to verify Records of Rights.
     */
    ror1b(req: operations.Ror1bRequestBody, security: operations.Ror1bSecurity, config?: AxiosRequestConfig): Promise<operations.Ror1bResponse>;
    /**
     * Solvency Certificate
     *
     * @remarks
     * API to verify Solvency Certificate.
     */
    slcer(req: operations.SlcerRequestBody, security: operations.SlcerSecurity, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
}
