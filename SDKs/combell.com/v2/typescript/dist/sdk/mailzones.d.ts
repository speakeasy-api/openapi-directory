import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage your mail zones.
 */
export declare class MailZones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure a alias
     */
    configureAlias(req: operations.ConfigureAliasRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAliasResponse>;
    /**
     * Configure anti-spam for mail zone
     */
    configureAntiSpam(req: operations.ConfigureAntiSpamRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAntiSpamResponse>;
    /**
     * Configure an extra smtp domain
     */
    configureSmtpDomain(req: operations.ConfigureSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureSmtpDomainResponse>;
    /**
     * Create a new alias
     */
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * Create a catch-all on the mail zone
     */
    createCatchAll(req: operations.CreateCatchAllRequest, config?: AxiosRequestConfig): Promise<operations.CreateCatchAllResponse>;
    /**
     * Create an extra smtp domain
     */
    createSmtpDomain(req: operations.CreateSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateSmtpDomainResponse>;
    /**
     * Delete a alias
     */
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * Delete a catch-all on the mail zone
     */
    deleteCatchAll(req: operations.DeleteCatchAllRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCatchAllResponse>;
    /**
     * Delete an extra smtp domain
     */
    deleteSmtpDomain(req: operations.DeleteSmtpDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSmtpDomainResponse>;
    /**
     * Get the mail zone.
     */
    getMailZone(req: operations.GetMailZoneRequest, config?: AxiosRequestConfig): Promise<operations.GetMailZoneResponse>;
}
