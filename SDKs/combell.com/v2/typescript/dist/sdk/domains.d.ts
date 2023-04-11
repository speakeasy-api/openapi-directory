import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage your domains.
 */
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Edit domain name renew state
     *
     * @remarks
     * Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
     * Allowed if the requesting user has the finance role.
     */
    configureDomain(req: operations.ConfigureDomainRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureDomainResponse>;
    /**
     * Edit domain name servers
     */
    editNameServers(req: operations.EditNameServersRequest, config?: AxiosRequestConfig): Promise<operations.EditNameServersResponse>;
    /**
     * Details of a domain
     */
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * Overviews of domains
     */
    getDomains(req: operations.GetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsResponse>;
    /**
     * Register a domain
     *
     * @remarks
     * Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
     */
    register(req: shared.RegisterDomain, config?: AxiosRequestConfig): Promise<operations.RegisterResponse>;
    /**
     * Transfer a domain
     *
     * @remarks
     * Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.
     */
    transfer(req: shared.TransferDomain, config?: AxiosRequestConfig): Promise<operations.TransferResponse>;
}
