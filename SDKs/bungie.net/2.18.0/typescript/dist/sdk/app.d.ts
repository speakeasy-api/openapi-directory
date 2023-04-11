import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * application
 */
export declare class App {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
     */
    appGetApplicationApiUsage(req: operations.AppGetApplicationApiUsageRequest, security: operations.AppGetApplicationApiUsageSecurity, config?: AxiosRequestConfig): Promise<operations.AppGetApplicationApiUsageResponse>;
    /**
     * Get list of applications created by Bungie.
     */
    appGetBungieApplications(config?: AxiosRequestConfig): Promise<operations.AppGetBungieApplicationsResponse>;
}
