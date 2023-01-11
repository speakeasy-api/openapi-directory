import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAppsId - Deletes an app
     *
     * Deletes the application with the specified application ID.
    **/
    deleteAppsId(req: operations.DeleteAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsIdResponse>;
    /**
     * getAccountsAccountIdApps - Lists apps
     *
     * List all applications for the specified account ID.
    **/
    getAccountsAccountIdApps(req: operations.GetAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdAppsResponse>;
    /**
     * patchAppsId - Updates an app
     *
     * Updates the application with the specified application ID.
    **/
    patchAppsId(req: operations.PatchAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsIdResponse>;
    /**
     * postAccountsAccountIdApps - Creates an app
     *
     * Creates an application with the specified properties.
    **/
    postAccountsAccountIdApps(req: operations.PostAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountIdAppsResponse>;
    /**
     * postAppsIdPkcs12 - Updates app's APNs info from a `.p12` file
     *
     * Updates the application's Apple Push Notification service (APNs) information.
    **/
    postAppsIdPkcs12(req: operations.PostAppsIdPkcs12Request, config?: AxiosRequestConfig): Promise<operations.PostAppsIdPkcs12Response>;
}
