import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Org Settings API endpoints allow you to manage your organization's
 *
 * @remarks
 * settings.
 *
 */
export declare class OrgSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get organization settings
     *
     * @remarks
     * Returns organization settings by name.
     *
     */
    getV2OrgsNameSettings(req: operations.GetV2OrgsNameSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2OrgsNameSettingsResponse>;
    /**
     * Update organization settings
     *
     * @remarks
     * Updates an organization's settings. Some settings are only used when the
     * organization is on a business plan.
     *
     * ***Only users in the "owners" group of the organization can use this endpoint.***
     *
     * The following settings are only used on a business plan:
     * - `restricted_images`
     *
     */
    putV2OrgsNameSettings(req: operations.PutV2OrgsNameSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutV2OrgsNameSettingsResponse>;
}
