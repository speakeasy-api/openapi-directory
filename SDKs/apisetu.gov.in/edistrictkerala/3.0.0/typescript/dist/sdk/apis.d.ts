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
     * Community Certificate
     *
     * @remarks
     * API to verify Community Certificate.
     */
    cmcer(req: operations.CmcerRequestBody, security: operations.CmcerSecurity, config?: AxiosRequestConfig): Promise<operations.CmcerResponse>;
    /**
     * Conversion Certificate
     *
     * @remarks
     * API to verify Conversion Certificate.
     */
    cncer(req: operations.CncerRequestBody, security: operations.CncerSecurity, config?: AxiosRequestConfig): Promise<operations.CncerResponse>;
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
     * Dependency Certificate
     *
     * @remarks
     * API to verify Dependency Certificate.
     */
    dpcer(req: operations.DpcerRequestBody, security: operations.DpcerSecurity, config?: AxiosRequestConfig): Promise<operations.DpcerResponse>;
    /**
     * Destitute Certificate
     *
     * @remarks
     * API to verify Destitute Certificate.
     */
    dscer(req: operations.DscerRequestBody, security: operations.DscerSecurity, config?: AxiosRequestConfig): Promise<operations.DscerResponse>;
    /**
     * Family Membership Certificate
     *
     * @remarks
     * API to verify Family Membership Certificate.
     */
    fmcer(req: operations.FmcerRequestBody, security: operations.FmcerSecurity, config?: AxiosRequestConfig): Promise<operations.FmcerResponse>;
    /**
     * Identification Certificate
     *
     * @remarks
     * API to verify Identification Certificate.
     */
    idcer(req: operations.IdcerRequestBody, security: operations.IdcerSecurity, config?: AxiosRequestConfig): Promise<operations.IdcerResponse>;
    /**
     * Inter-Caste Marriage Certificate
     *
     * @remarks
     * API to verify Inter-Caste Marriage Certificate.
     */
    imcer(req: operations.ImcerRequestBody, security: operations.ImcerSecurity, config?: AxiosRequestConfig): Promise<operations.ImcerResponse>;
    /**
     * Income Certificate
     *
     * @remarks
     * API to verify Income Certificate.
     */
    incer(req: operations.IncerRequestBody, security: operations.IncerSecurity, config?: AxiosRequestConfig): Promise<operations.IncerResponse>;
    /**
     * Life Certificate
     *
     * @remarks
     * API to verify Life Certificate.
     */
    lfcer(req: operations.LfcerRequestBody, security: operations.LfcerSecurity, config?: AxiosRequestConfig): Promise<operations.LfcerResponse>;
    /**
     * Legal Heir Certificate
     *
     * @remarks
     * API to verify Legal Heir Certificate.
     */
    lhcer(req: operations.LhcerRequestBody, security: operations.LhcerSecurity, config?: AxiosRequestConfig): Promise<operations.LhcerResponse>;
    /**
     * Location Certificate
     *
     * @remarks
     * API to verify Location Certificate.
     */
    locer(req: operations.LocerRequestBody, security: operations.LocerSecurity, config?: AxiosRequestConfig): Promise<operations.LocerResponse>;
    /**
     * Minority Certificate
     *
     * @remarks
     * API to verify Minority Certificate.
     */
    mncer(req: operations.MncerRequestBody, security: operations.MncerSecurity, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * Non-Remarriage Certificate
     *
     * @remarks
     * API to verify Non-Remarriage Certificate.
     */
    nrcer(req: operations.NrcerRequestBody, security: operations.NrcerSecurity, config?: AxiosRequestConfig): Promise<operations.NrcerResponse>;
    /**
     * Nativity Certificate
     *
     * @remarks
     * API to verify Nativity Certificate.
     */
    ntcer(req: operations.NtcerRequestBody, security: operations.NtcerSecurity, config?: AxiosRequestConfig): Promise<operations.NtcerResponse>;
    /**
     * One and the Same Certificate
     *
     * @remarks
     * API to verify One and the Same Certificate.
     */
    oscer(req: operations.OscerRequestBody, security: operations.OscerSecurity, config?: AxiosRequestConfig): Promise<operations.OscerResponse>;
    /**
     * Possession and Non-Attachment Certificate
     *
     * @remarks
     * API to verify Possession and Non-Attachment Certificate.
     */
    pncer(req: operations.PncerRequestBody, security: operations.PncerSecurity, config?: AxiosRequestConfig): Promise<operations.PncerResponse>;
    /**
     * Possession Certificate
     *
     * @remarks
     * API to verify Possession Certificate.
     */
    pscer(req: operations.PscerRequestBody, security: operations.PscerSecurity, config?: AxiosRequestConfig): Promise<operations.PscerResponse>;
    /**
     * Relationship Certificate
     *
     * @remarks
     * API to verify Relationship Certificate.
     */
    rlcer(req: operations.RlcerRequestBody, security: operations.RlcerSecurity, config?: AxiosRequestConfig): Promise<operations.RlcerResponse>;
    /**
     * Residence Certificate
     *
     * @remarks
     * API to verify Residence Certificate.
     */
    rscer(req: operations.RscerRequestBody, security: operations.RscerSecurity, config?: AxiosRequestConfig): Promise<operations.RscerResponse>;
    /**
     * Solvency Certificate
     *
     * @remarks
     * API to verify Solvency Certificate.
     */
    slcer(req: operations.SlcerRequestBody, security: operations.SlcerSecurity, config?: AxiosRequestConfig): Promise<operations.SlcerResponse>;
    /**
     * Valuation Certificate
     *
     * @remarks
     * API to verify Valuation Certificate.
     */
    vlcer(req: operations.VlcerRequestBody, security: operations.VlcerSecurity, config?: AxiosRequestConfig): Promise<operations.VlcerResponse>;
    /**
     * Widow-Widower Certificate
     *
     * @remarks
     * API to verify Widow-Widower Certificate.
     */
    wwcer(req: operations.WwcerRequestBody, security: operations.WwcerSecurity, config?: AxiosRequestConfig): Promise<operations.WwcerResponse>;
}
