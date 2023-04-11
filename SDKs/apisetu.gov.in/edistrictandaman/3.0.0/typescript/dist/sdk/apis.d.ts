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
     * Bar License
     *
     * @remarks
     * API to verify Bar License.
     */
    brlcs(req: operations.BrlcsRequestBody, security: operations.BrlcsSecurity, config?: AxiosRequestConfig): Promise<operations.BrlcsResponse>;
    /**
     * Dependency Certificate
     *
     * @remarks
     * API to verify Dependency Certificate.
     */
    dpcer(req: operations.DpcerRequestBody, security: operations.DpcerSecurity, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * Family Membership Certificate
     *
     * @remarks
     * API to verify Family Membership Certificate.
     */
    fmcer(req: operations.FmcerRequestBody, security: operations.FmcerSecurity, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Local Candidate/ Status Certificate
     *
     * @remarks
     * API to verify Local Candidate/ Status Certificate.
     */
    lccep(req: operations.LccepRequestBody, security: operations.LccepSecurity, config?: AxiosRequestConfig): Promise<operations.LccepResponse>;
    /**
     * No Dues/ Objection Certificate
     *
     * @remarks
     * API to verify No Dues/ Objection Certificate.
     */
    ndcer(req: operations.NdcerRequestBody, security: operations.NdcerSecurity, config?: AxiosRequestConfig): Promise<operations.NdcerResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
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
    /**
     * Regional Language(s) Certificate
     *
     * @remarks
     * API to verify Regional Language(s) Certificate.
     */
    rucer(req: operations.RucerRequestBody, security: operations.RucerSecurity, config?: AxiosRequestConfig): Promise<operations.RucerResponse>;
    /**
     * Senior Citizen Identity Card/ Certificate
     *
     * @remarks
     * API to verify Senior Citizen Identity Card/ Certificate.
     */
    sicrd(req: operations.SicrdRequestBody, security: operations.SicrdSecurity, config?: AxiosRequestConfig): Promise<operations.SicrdResponse>;
    /**
     * Valuation Certificate
     *
     * @remarks
     * API to verify Valuation Certificate.
     */
    vlcer(req: operations.VlcerRequestBody, security: operations.VlcerSecurity, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
}
