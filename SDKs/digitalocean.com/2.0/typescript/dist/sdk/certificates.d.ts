import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Certificates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCertificates - Create a New Certificate
     *
     * To upload new SSL certificate which you have previously generated, send a POST
     * request to `/v2/certificates`.
     *
     * When uploading a user-generated certificate, the `private_key`,
     * `leaf_certificate`, and optionally the `certificate_chain` attributes should
     * be provided. The type must be set to `custom`.
     *
     * When using Let's Encrypt to create a certificate, the `dns_names` attribute
     * must be provided, and the type must be set to `lets_encrypt`.
     *
    **/
    createCertificates(req: operations.CreateCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.CreateCertificatesResponse>;
    /**
     * deleteCertificate - Delete a Certificate
     *
     * To delete a specific certificate, send a DELETE request to
     * `/v2/certificates/$CERTIFICATE_ID`.
     *
    **/
    deleteCertificate(req: operations.DeleteCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificateResponse>;
    /**
     * getCertificate - Retrieve an Existing Certificate
     *
     * To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.
    **/
    getCertificate(req: operations.GetCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetCertificateResponse>;
    /**
     * listCertificates - List All Certificates
     *
     * To list all of the certificates available on your account, send a GET request to `/v2/certificates`.
    **/
    listCertificates(req: operations.ListCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCertificatesResponse>;
}
