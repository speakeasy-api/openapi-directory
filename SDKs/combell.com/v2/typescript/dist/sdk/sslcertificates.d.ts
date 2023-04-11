import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage your SSL certificates.
 */
export declare class SSLCertificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Download a SSL certificate
     *
     * @remarks
     * Returns the certifcate as binary data with the content-type and the filename information in the response headers.
     */
    downloadCertificate(req: operations.DownloadCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DownloadCertificateResponse>;
    /**
     * Detail of a SSL certificate
     */
    getSslCertificate(req: operations.GetSslCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateResponse>;
    /**
     * Overview of SSL certificates
     */
    getSslCertificates(req: operations.GetSslCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificatesResponse>;
}
