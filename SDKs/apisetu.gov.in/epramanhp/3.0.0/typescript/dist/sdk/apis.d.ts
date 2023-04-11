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
     * Agriculture/ Agriculturist Certificate
     *
     * @remarks
     * API to verify Agriculture/ Agriculturist Certificate.
     */
    agcer(req: operations.AgcerRequestBody, security: operations.AgcerSecurity, config?: AxiosRequestConfig): Promise<operations.AgcerResponse>;
    /**
     * Backward Area Certificate
     *
     * @remarks
     * API to verify Backward Area Certificate.
     */
    bacer(req: operations.BacerRequestBody, security: operations.BacerSecurity, config?: AxiosRequestConfig): Promise<operations.BacerResponse>;
    /**
     * Bonafide Certificate
     *
     * @remarks
     * API to verify Bonafide Certificate.
     */
    bhcer(req: operations.BhcerRequestBody, security: operations.BhcerSecurity, config?: AxiosRequestConfig): Promise<operations.BhcerResponse>;
    /**
     * Character Certificate
     *
     * @remarks
     * API to verify Character Certificate.
     */
    chcer(req: operations.ChcerRequestBody, security: operations.ChcerSecurity, config?: AxiosRequestConfig): Promise<operations.ChcerResponse>;
    /**
     * Dogra Class Certificate
     *
     * @remarks
     * API to verify Dogra Class Certificate.
     */
    dccer(req: operations.DccerRequestBody, security: operations.DccerSecurity, config?: AxiosRequestConfig): Promise<operations.DccerResponse>;
    /**
     * Freedom Fighter Certificate
     *
     * @remarks
     * API to verify Freedom Fighter Certificate.
     */
    ffcer(req: operations.FfcerRequestBody, security: operations.FfcerSecurity, config?: AxiosRequestConfig): Promise<operations.FfcerResponse>;
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
     * Minority Certificate
     *
     * @remarks
     * API to verify Minority Certificate.
     */
    mncer(req: operations.MncerRequestBody, security: operations.MncerSecurity, config?: AxiosRequestConfig): Promise<operations.MncerResponse>;
    /**
     * OBC Certificate
     *
     * @remarks
     * API to verify OBC Certificate.
     */
    obcer(req: operations.ObcerRequestBody, security: operations.ObcerSecurity, config?: AxiosRequestConfig): Promise<operations.ObcerResponse>;
    /**
     * Passport/ Passport Verification
     *
     * @remarks
     * API to verify Passport/ Passport Verification.
     */
    psprt(req: operations.PsprtRequestBody, security: operations.PsprtSecurity, config?: AxiosRequestConfig): Promise<operations.PsprtResponse>;
    /**
     * Rural Area Certificate
     *
     * @remarks
     * API to verify Rural Area Certificate.
     */
    racer(req: operations.RacerRequestBody, security: operations.RacerSecurity, config?: AxiosRequestConfig): Promise<operations.RacerResponse>;
    /**
     * Marriage Certificate
     *
     * @remarks
     * API to verify Marriage Certificate.
     */
    rmcer(req: operations.RmcerRequestBody, security: operations.RmcerSecurity, config?: AxiosRequestConfig): Promise<operations.RmcerResponse>;
    /**
     * SC/ST  Certificate
     *
     * @remarks
     * API to verify SC/ST  Certificate.
     */
    shcer(req: operations.ShcerRequestBody, security: operations.ShcerSecurity, config?: AxiosRequestConfig): Promise<operations.ShcerResponse>;
}
