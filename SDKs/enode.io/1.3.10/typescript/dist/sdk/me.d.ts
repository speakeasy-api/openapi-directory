import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * disconnectVendor - Disconnect Vendor
     *
     * Disconnect a single Vendor from the User's account.
     *
     * All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.
    **/
    disconnectVendor(req: operations.DisconnectVendorRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectVendorResponse>;
    /**
     * getMe - Get My User
     *
     * Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.
    **/
    getMe(req: operations.GetMeRequest, config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
}
