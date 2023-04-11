import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * VAT Verification methods
 */
export declare class V1VatVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a verification result
     *
     * @remarks
     * Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
     */
    vatBasic(req: operations.VatBasicRequest, security: operations.VatBasicSecurity, config?: AxiosRequestConfig): Promise<operations.VatBasicResponse>;
    /**
     * Returns a verification result and company data
     *
     * @remarks
     * Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
     */
    vatComprehensive(req: operations.VatComprehensiveRequest, security: operations.VatComprehensiveSecurity, config?: AxiosRequestConfig): Promise<operations.VatComprehensiveResponse>;
    /**
     * Returns a level two verification result
     *
     * @remarks
     * Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.
     */
    vatLevelTwo(req: operations.VatLevelTwoRequest, security: operations.VatLevelTwoSecurity, config?: AxiosRequestConfig): Promise<operations.VatLevelTwoResponse>;
    /**
     * Returns a list of vat numbers with additional data
     *
     * @remarks
     * Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.
     */
    vatLookup(req: operations.VatLookupRequest, security: operations.VatLookupSecurity, config?: AxiosRequestConfig): Promise<operations.VatLookupResponse>;
}
