import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create new SSL certificates. In the provisioning documentation you can find more info on the flow that should be followed.
 */
export declare class SSLCertificateRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a SSL certificate request
     *
     * @remarks
     * Executing this method causes the purchase of a paying product.<br />
     * Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
     * Please note that promotional pricing does not apply for purchases made through our API.
     */
    addSslCertificateRequest(req: shared.CreateSslCertificateRequest, config?: AxiosRequestConfig): Promise<operations.AddSslCertificateRequestResponse>;
    /**
     * Detail of a SSL certificate request
     */
    getSslCertificateRequest(req: operations.GetSslCertificateRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateRequestResponse>;
    /**
     * Overview of SSL certificate requests
     */
    getSslCertificateRequests(req: operations.GetSslCertificateRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetSslCertificateRequestsResponse>;
    /**
     * Verify the SSL certificate request domain validations
     */
    verifySslCertificateRequestDomainValidations(req: operations.VerifySslCertificateRequestDomainValidationsRequest, config?: AxiosRequestConfig): Promise<operations.VerifySslCertificateRequestDomainValidationsResponse>;
}
