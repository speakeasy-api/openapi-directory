import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about settings_changes
 */
export declare class SettingsChanges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Settings Changes
     *
     * @remarks
     * List Settings Changes
     */
    getSettingsChanges(req: operations.GetSettingsChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsChangesResponse>;
}
