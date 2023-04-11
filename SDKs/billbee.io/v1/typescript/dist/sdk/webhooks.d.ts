import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing WebHook registration.
     */
    webHookManagementDelete(req: operations.WebHookManagementDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebHookManagementDeleteResponse>;
    /**
     * Deletes all existing WebHook registrations.
     */
    webHookManagementDeleteAll(config?: AxiosRequestConfig): Promise<operations.WebHookManagementDeleteAllResponse>;
    /**
     * Gets all registered WebHooks for a given user.
     */
    webHookManagementGet(config?: AxiosRequestConfig): Promise<operations.WebHookManagementGetResponse>;
    /**
     * Returns a list of all known filters you can use to register webhooks
     */
    webHookManagementGetFilters(config?: AxiosRequestConfig): Promise<operations.WebHookManagementGetFiltersResponse>;
    /**
     * Looks up a registered WebHook with the given {id} for a given user.
     */
    webHookManagementLookup(req: operations.WebHookManagementLookupRequest, config?: AxiosRequestConfig): Promise<operations.WebHookManagementLookupResponse>;
    /**
     * Registers a new WebHook for a given user.
     */
    webHookManagementPost(req: shared.RechnungsdruckWebAppControllersApiWebHookApiModel, config?: AxiosRequestConfig): Promise<operations.WebHookManagementPostResponse>;
    /**
     * Updates an existing WebHook registration.
     */
    webHookManagementPut(req: operations.WebHookManagementPutRequest, config?: AxiosRequestConfig): Promise<operations.WebHookManagementPutResponse>;
}
