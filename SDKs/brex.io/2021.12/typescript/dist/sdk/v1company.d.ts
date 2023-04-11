import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Company Search methods
 */
export declare class V1Company {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of companies from the KYC API company index
     *
     * @remarks
     * KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name
     */
    companyAlternativeSearch(req: operations.CompanyAlternativeSearchRequest, security: operations.CompanyAlternativeSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyAlternativeSearchResponse>;
    /**
     * Retrieves announcement data
     *
     * @remarks
     * Request full announcement data identified by announcement id
     */
    companyAnnouncement(req: operations.CompanyAnnouncementRequest, security: operations.CompanyAnnouncementSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyAnnouncementResponse>;
    /**
     * Retrieves a list of stock exchange listings
     *
     * @remarks
     * Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.
     */
    companyDeepsearchISIN(req: operations.CompanyDeepsearchISINRequestBody, security: operations.CompanyDeepsearchISINSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchISINResponse>;
    /**
     * Retrieves a list of companies
     *
     * @remarks
     * Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.
     */
    companyDeepsearchLEI(req: operations.CompanyDeepsearchLEIRequest, security: operations.CompanyDeepsearchLEISecurity, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchLEIResponse>;
    /**
     * Retrieves a list of companies from the official business register
     *
     * @remarks
     * Search for companies with a certain name. Search is forwarded to the respective business register of the country.
     */
    companyDeepsearchName(req: operations.CompanyDeepsearchNameRequest, security: operations.CompanyDeepsearchNameSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNameResponse>;
    /**
     * Retrieves a list of companies from the official business register
     *
     * @remarks
     * Search for companies with a certain register number. Search is forwarded to the respective business register of the country.
     */
    companyDeepsearchNumber(req: operations.CompanyDeepsearchNumberRequest, security: operations.CompanyDeepsearchNumberSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyDeepsearchNumberResponse>;
    /**
     * Retrieves company announcements
     *
     * @remarks
     * Search announcements filed to the business register from a company identified by an id
     */
    companyIdAnnouncements(req: operations.CompanyIdAnnouncementsRequest, security: operations.CompanyIdAnnouncementsSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyIdAnnouncementsResponse>;
    /**
     * Retrieves company details
     *
     * @remarks
     * Get company details by id. The level of details is defined by the dataset parameter
     */
    companyIdDataset(req: operations.CompanyIdDatasetRequest, security: operations.CompanyIdDatasetSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyIdDatasetResponse>;
    /**
     * Retrieves structured data extracted from a company document
     *
     * @remarks
     * Request company superdata identified by company id
     */
    companyIdSuper(req: operations.CompanyIdSuperRequest, security: operations.CompanyIdSuperSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyIdSuperResponse>;
    /**
     * Get available ChangeTypes
     *
     * @remarks
     * Get current list of available ChangeTypes to subscribe to
     */
    companyMonitorChangeTypesList(config?: AxiosRequestConfig): Promise<operations.CompanyMonitorChangeTypesListResponse>;
    /**
     * Get monitor status for specific company id
     *
     * @remarks
     * Query status of registered monitors for a specific company identified by a company id
     */
    companyMonitorId(req: operations.CompanyMonitorIdRequest, security: operations.CompanyMonitorIdSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorIdResponse>;
    /**
     * Retrieves a list of registered monitors
     *
     * @remarks
     * Query list of all registered monitors for logged in user
     */
    companyMonitorList(config?: AxiosRequestConfig): Promise<operations.CompanyMonitorListResponse>;
    /**
     * Register a Company for monitoring
     *
     * @remarks
     * Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.
     */
    companyMonitorRegister(req: operations.CompanyMonitorRegisterRequest, security: operations.CompanyMonitorRegisterSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorRegisterResponse>;
    /**
     * Deactivates an active notification
     *
     * @remarks
     * Deactivate a previously registered company monitor identified by the notifier id
     */
    companyMonitorUnregister(req: operations.CompanyMonitorUnregisterRequest, security: operations.CompanyMonitorUnregisterSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyMonitorUnregisterResponse>;
    /**
     * Retrieves a list of registered notifications
     *
     * @remarks
     * Query list of registered notifications for a specific company identified by a company id
     */
    companyNotificationId(req: operations.CompanyNotificationIdRequest, security: operations.CompanyNotificationIdSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationIdResponse>;
    /**
     * Retrieves a list of registered notifications
     *
     * @remarks
     * Query list of registered callback URLs for logged in user
     */
    companyNotificationList(config?: AxiosRequestConfig): Promise<operations.CompanyNotificationListResponse>;
    /**
     * Creates a new notification
     *
     * @remarks
     * Register a new callback URL to get notifications about companies.
     */
    companyNotificationRegister(req: operations.CompanyNotificationRegisterRequest, security: operations.CompanyNotificationRegisterSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationRegisterResponse>;
    /**
     * Unregister a company from Monitoring
     *
     * @remarks
     * Deactivate a previously registered company monitor identified by the notifier id
     */
    companyNotificationUnregister(req: operations.CompanyNotificationUnregisterRequest, security: operations.CompanyNotificationUnregisterSecurity, config?: AxiosRequestConfig): Promise<operations.CompanyNotificationUnregisterResponse>;
    /**
     * Retrieves a list of companies from the KYC API company index
     *
     * @remarks
     * KYC API company index lookup for companies with a certain name in a country.
     */
    companySearchName(req: operations.CompanySearchNameRequest, security: operations.CompanySearchNameSecurity, config?: AxiosRequestConfig): Promise<operations.CompanySearchNameResponse>;
    /**
     * Retrieves a list of companies from the KYC API company index
     *
     * @remarks
     * KYC API company index lookup for companies with a certain register number in a country.
     */
    companySearchNumber(req: operations.CompanySearchNumberRequest, security: operations.CompanySearchNumberSecurity, config?: AxiosRequestConfig): Promise<operations.CompanySearchNumberResponse>;
}
