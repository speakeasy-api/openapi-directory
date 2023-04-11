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
     * Class XII Passing Certificate
     *
     * @remarks
     * API to verify Class XII Passing Certificate.
     */
    hpcer(req: operations.HpcerRequestBody, security: operations.HpcerSecurity, config?: AxiosRequestConfig): Promise<operations.HpcerResponse>;
    /**
     * Class XII Marksheet
     *
     * @remarks
     * API to verify Class XII Marksheet.
     */
    hscer(req: operations.HscerRequestBody, security: operations.HscerSecurity, config?: AxiosRequestConfig): Promise<operations.HscerResponse>;
    /**
     * Class XII Migration Certificate
     *
     * @remarks
     * API to verify Class XII Migration Certificate.
     */
    hsmgr(req: operations.HsmgrRequestBody, security: operations.HsmgrSecurity, config?: AxiosRequestConfig): Promise<operations.HsmgrResponse>;
    /**
     * NCHMCT Skill Certificate (X)
     *
     * @remarks
     * API to verify NCHMCT Skill Certificate (X).
     */
    nchsc(req: operations.NchscRequestBody, security: operations.NchscSecurity, config?: AxiosRequestConfig): Promise<operations.NchscResponse>;
    /**
     * NCHMCT Skill Certificate (XII)
     *
     * @remarks
     * API to verify NCHMCT Skill Certificate (XII).
     */
    nctsc(req: operations.NctscRequestBody, security: operations.NctscSecurity, config?: AxiosRequestConfig): Promise<operations.NctscResponse>;
    /**
     * NSE Skill Certificate (X)
     *
     * @remarks
     * API to verify NSE Skill Certificate (X).
     */
    nsesc(req: operations.NsescRequestBody, security: operations.NsescSecurity, config?: AxiosRequestConfig): Promise<operations.NsescResponse>;
    /**
     * NSE Skill Certificate (XII)
     *
     * @remarks
     * API to verify NSE Skill Certificate (XII).
     */
    nstsc(req: operations.NstscRequestBody, security: operations.NstscSecurity, config?: AxiosRequestConfig): Promise<operations.NstscResponse>;
    /**
     * NEET Rank Letter
     *
     * @remarks
     * API to verify NEET Rank Letter.
     */
    ntltr(req: operations.NtltrRequestBody, security: operations.NtltrSecurity, config?: AxiosRequestConfig): Promise<operations.NtltrResponse>;
    /**
     * NEET Marksheet
     *
     * @remarks
     * API to verify NEET Marksheet.
     */
    ntmks(req: operations.NtmksRequestBody, security: operations.NtmksSecurity, config?: AxiosRequestConfig): Promise<operations.NtmksResponse>;
    /**
     * Skill Certificate (X)
     *
     * @remarks
     * API to verify Skill Certificate (X).
     */
    skhsc(req: operations.SkhscRequestBody, security: operations.SkhscSecurity, config?: AxiosRequestConfig): Promise<operations.SkhscResponse>;
    /**
     * Skill Certificate (XII)
     *
     * @remarks
     * API to verify Skill Certificate (XII).
     */
    sktsc(req: operations.SktscRequestBody, security: operations.SktscSecurity, config?: AxiosRequestConfig): Promise<operations.SktscResponse>;
    /**
     * Class X Passing Certificate
     *
     * @remarks
     * API to verify Class X Passing Certificate.
     */
    spcer(req: operations.SpcerRequestBody, security: operations.SpcerSecurity, config?: AxiosRequestConfig): Promise<operations.SpcerResponse>;
    /**
     * Class X Marksheet
     *
     * @remarks
     * API to verify Class X Marksheet.
     */
    sscer(req: operations.SscerRequestBody, security: operations.SscerSecurity, config?: AxiosRequestConfig): Promise<operations.SscerResponse>;
    /**
     * Class X Migration Certificate
     *
     * @remarks
     * API to verify Class X Migration Certificate.
     */
    ssmgr(req: operations.SsmgrRequestBody, security: operations.SsmgrSecurity, config?: AxiosRequestConfig): Promise<operations.SsmgrResponse>;
    /**
     * Teachers Eligibility Test Certificate
     *
     * @remarks
     * API to verify Teachers Eligibility Test Certificate.
     */
    tetcr(req: operations.TetcrRequestBody, security: operations.TetcrSecurity, config?: AxiosRequestConfig): Promise<operations.TetcrResponse>;
    /**
     * Teachers Eligibility Test Mark Sheet
     *
     * @remarks
     * API to verify Teachers Eligibility Test Mark Sheet.
     */
    tetms(req: operations.TetmsRequestBody, security: operations.TetmsSecurity, config?: AxiosRequestConfig): Promise<operations.TetmsResponse>;
}
