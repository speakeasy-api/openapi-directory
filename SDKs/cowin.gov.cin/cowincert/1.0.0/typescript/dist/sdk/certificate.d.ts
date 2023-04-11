import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Certificate api
 */
export declare class Certificate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download the certificate in pdf format
     */
    getCertificatePdf(req: shared.CertificateRequest, security: operations.GetCertificatePdfSecurity, config?: AxiosRequestConfig): Promise<operations.GetCertificatePdfResponse>;
}
