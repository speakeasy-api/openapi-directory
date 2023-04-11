import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `Me` endpoint returns metadata about the authenticated User.
 */
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Disconnect Vendor
     *
     * @remarks
     * Disconnect a single Vendor from the User's account.
     *
     * All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.
     */
    disconnectVendor(req: operations.DisconnectVendorRequest, security: operations.DisconnectVendorSecurity, config?: AxiosRequestConfig): Promise<operations.DisconnectVendorResponse>;
    /**
     * Get My User
     *
     * @remarks
     * Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
}
