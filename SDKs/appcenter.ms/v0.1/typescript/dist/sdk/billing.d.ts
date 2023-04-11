import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
     */
    billingAggregatedInformationGetAll(req: operations.BillingAggregatedInformationGetAllRequest, security: operations.BillingAggregatedInformationGetAllSecurity, config?: AxiosRequestConfig): Promise<operations.BillingAggregatedInformationGetAllResponse>;
    /**
     * Aggregated Billing Information for owner of a given app.
     */
    billingAggregatedInformationGetByApp(req: operations.BillingAggregatedInformationGetByAppRequest, security: operations.BillingAggregatedInformationGetByAppSecurity, config?: AxiosRequestConfig): Promise<operations.BillingAggregatedInformationGetByAppResponse>;
    /**
     * Aggregated Billing Information for a given Organization.
     */
    billingAggregatedInformationGetForOrg(req: operations.BillingAggregatedInformationGetForOrgRequest, security: operations.BillingAggregatedInformationGetForOrgSecurity, config?: AxiosRequestConfig): Promise<operations.BillingAggregatedInformationGetForOrgResponse>;
}
