import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an domain entry
     */
    accountDeleteDomainWhitelist(req: operations.AccountDeleteDomainWhitelistRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteDomainWhitelistResponse>;
    /**
     * Delete a guest
     */
    accountDeleteGuest(req: operations.AccountDeleteGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteGuestResponse>;
    /**
     * Delete an ip blacklist entry
     */
    accountDeleteIpBlacklist(req: operations.AccountDeleteIpBlacklistRequest, config?: AxiosRequestConfig): Promise<operations.AccountDeleteIpBlacklistResponse>;
    /**
     * Retrieve current account data
     */
    accountGet(config?: AxiosRequestConfig): Promise<operations.AccountGetResponse>;
    /**
     * Retrieve list of a domains allowed to redirect in DDU mode
     */
    accountGetDomainWhitelist(req: operations.AccountGetDomainWhitelistRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetDomainWhitelistResponse>;
    /**
     * Retrieve a guest
     */
    accountGetGuest(req: operations.AccountGetGuestRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestResponse>;
    /**
     * Retrieve list of a guest
     */
    accountGetGuests(req: operations.AccountGetGuestsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestsResponse>;
    /**
     * Retrieve count of guests
     */
    accountGetGuestsCount(req: operations.AccountGetGuestsCountRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetGuestsCountResponse>;
    /**
     * Retrieve list of a ip to exclude from event tracking
     */
    accountGetIpBlacklist(req: operations.AccountGetIpBlacklistRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetIpBlacklistResponse>;
    /**
     * Retrieve permissions for a guest
     */
    accountGetPermissions(req: operations.AccountGetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPermissionsResponse>;
    /**
     * Retrieve count of the permissions for a guest
     */
    accountGetPermissionsCount(req: operations.AccountGetPermissionsCountRequest, config?: AxiosRequestConfig): Promise<operations.AccountGetPermissionsCountResponse>;
    /**
     * Retrieve current account plan
     */
    accountGetPlan(config?: AxiosRequestConfig): Promise<operations.AccountGetPlanResponse>;
    /**
     * Change the permission on a shared object
     */
    accountPatchPermissionsForm(req: operations.AccountPatchPermissionsFormRequest, config?: AxiosRequestConfig): Promise<operations.AccountPatchPermissionsFormResponse>;
    /**
     * Change the permission on a shared object
     */
    accountPatchPermissionsJson(req: operations.AccountPatchPermissionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.AccountPatchPermissionsJsonResponse>;
    /**
     * Change the permission on a shared object
     */
    accountPatchPermissionsRaw(req: operations.AccountPatchPermissionsRawRequest, config?: AxiosRequestConfig): Promise<operations.AccountPatchPermissionsRawResponse>;
    /**
     * Update a guest
     */
    accountPostGuestForm(req: operations.AccountPostGuestFormRequest, config?: AxiosRequestConfig): Promise<operations.AccountPostGuestFormResponse>;
    /**
     * Update a guest
     */
    accountPostGuestJson(req: operations.AccountPostGuestJsonRequest, config?: AxiosRequestConfig): Promise<operations.AccountPostGuestJsonResponse>;
    /**
     * Update a guest
     */
    accountPostGuestRaw(req: operations.AccountPostGuestRawRequest, config?: AxiosRequestConfig): Promise<operations.AccountPostGuestRawResponse>;
    /**
     * Update current account data
     */
    accountPostForm(req: shared.ApiCoreDtoAccountingUser, config?: AxiosRequestConfig): Promise<operations.AccountPostFormResponse>;
    /**
     * Update current account data
     */
    accountPostJson(req: shared.ApiCoreDtoAccountingUser, config?: AxiosRequestConfig): Promise<operations.AccountPostJsonResponse>;
    /**
     * Update current account data
     */
    accountPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AccountPostRawResponse>;
    /**
     * Create an domain entry
     */
    accountPutDomainWhitelistForm(req: shared.ApiCoreDtoAccountingDomainWhitelistEntry, config?: AxiosRequestConfig): Promise<operations.AccountPutDomainWhitelistFormResponse>;
    /**
     * Create an domain entry
     */
    accountPutDomainWhitelistJson(req: shared.ApiCoreDtoAccountingDomainWhitelistEntry, config?: AxiosRequestConfig): Promise<operations.AccountPutDomainWhitelistJsonResponse>;
    /**
     * Create an domain entry
     */
    accountPutDomainWhitelistRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AccountPutDomainWhitelistRawResponse>;
    /**
     * Create a guest
     */
    accountPutGuestForm(req: shared.ApiCoreDtoAccountingGuest, config?: AxiosRequestConfig): Promise<operations.AccountPutGuestFormResponse>;
    /**
     * Create a guest
     */
    accountPutGuestJson(req: shared.ApiCoreDtoAccountingGuest, config?: AxiosRequestConfig): Promise<operations.AccountPutGuestJsonResponse>;
    /**
     * Create a guest
     */
    accountPutGuestRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AccountPutGuestRawResponse>;
    /**
     * Create an ip blacklist entry
     */
    accountPutIpBlacklistForm(req: shared.ApiCoreDtoAccountingIpBlacklistEntry, config?: AxiosRequestConfig): Promise<operations.AccountPutIpBlacklistFormResponse>;
    /**
     * Create an ip blacklist entry
     */
    accountPutIpBlacklistJson(req: shared.ApiCoreDtoAccountingIpBlacklistEntry, config?: AxiosRequestConfig): Promise<operations.AccountPutIpBlacklistJsonResponse>;
    /**
     * Create an ip blacklist entry
     */
    accountPutIpBlacklistRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.AccountPutIpBlacklistRawResponse>;
    /**
     * Change the permission on a shared object
     */
    postAccountGuestsGuestIdTypePermissionsPatchForm(req: operations.PostAccountGuestsGuestIdTypePermissionsPatchFormRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountGuestsGuestIdTypePermissionsPatchFormResponse>;
    /**
     * Change the permission on a shared object
     */
    postAccountGuestsGuestIdTypePermissionsPatchJson(req: operations.PostAccountGuestsGuestIdTypePermissionsPatchJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountGuestsGuestIdTypePermissionsPatchJsonResponse>;
    /**
     * Change the permission on a shared object
     */
    postAccountGuestsGuestIdTypePermissionsPatchRaw(req: operations.PostAccountGuestsGuestIdTypePermissionsPatchRawRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountGuestsGuestIdTypePermissionsPatchRawResponse>;
}
