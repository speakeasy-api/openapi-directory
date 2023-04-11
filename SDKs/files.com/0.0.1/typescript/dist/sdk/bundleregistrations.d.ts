import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bundle_registrations
 */
export declare class BundleRegistrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Bundle Registrations
     *
     * @remarks
     * List Bundle Registrations
     */
    getBundleRegistrations(req: operations.GetBundleRegistrationsRequest, config?: AxiosRequestConfig): Promise<operations.GetBundleRegistrationsResponse>;
}
