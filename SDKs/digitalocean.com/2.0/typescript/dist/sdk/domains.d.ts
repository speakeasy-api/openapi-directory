import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDomain - Create a New Domain
     *
     * To create a new domain, send a POST request to `/v2/domains`. Set the "name"
     * attribute to the domain name you are adding. Optionally, you may set the
     * "ip_address" attribute, and an A record will be automatically created pointing
     * to the apex domain.
     *
    **/
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * deleteDomain - Delete a Domain
     *
     * To delete a domain, send a DELETE request to `/v2/domains/$DOMAIN_NAME`.
     *
    **/
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * getDomain - Retrieve an Existing Domain
     *
     * To get details about a specific domain, send a GET request to `/v2/domains/$DOMAIN_NAME`.
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * listAllDomains - List All Domains
     *
     * To retrieve a list of all of the domains in your account, send a GET request to `/v2/domains`.
    **/
    listAllDomains(config?: AxiosRequestConfig): Promise<operations.ListAllDomainsResponseOutput>;
}
