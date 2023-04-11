import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve count of domains
     */
    domainsCount(req: operations.DomainsCountRequest, config?: AxiosRequestConfig): Promise<operations.DomainsCountResponse>;
    /**
     * Delete a domain
     */
    domainsDelete(req: operations.DomainsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DomainsDeleteResponse>;
    /**
     * Retrieve a list of domains
     */
    domainsGet(req: operations.DomainsGetRequest, config?: AxiosRequestConfig): Promise<operations.DomainsGetResponse>;
    /**
     * Create a domain
     */
    domainsPutForm(req: shared.ApiCoreDtoDomainsDomain, config?: AxiosRequestConfig): Promise<operations.DomainsPutFormResponse>;
    /**
     * Create a domain
     */
    domainsPutJson(req: shared.ApiCoreDtoDomainsDomain, config?: AxiosRequestConfig): Promise<operations.DomainsPutJsonResponse>;
    /**
     * Create a domain
     */
    domainsPutRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.DomainsPutRawResponse>;
    /**
     * Update a domain
     */
    domainsUpdateForm(req: operations.DomainsUpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.DomainsUpdateFormResponse>;
    /**
     * Update a domain
     */
    domainsUpdateJson(req: operations.DomainsUpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.DomainsUpdateJsonResponse>;
    /**
     * Update a domain
     */
    domainsUpdateRaw(req: operations.DomainsUpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.DomainsUpdateRawResponse>;
    /**
     * Get a domain
     */
    getDomainsId(req: operations.GetDomainsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsIdResponse>;
}
