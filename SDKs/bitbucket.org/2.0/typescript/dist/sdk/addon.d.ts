import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The addon resource is intended to use used by Bitbucket Cloud Connect
 *
 * @remarks
 * Apps, and only supports JWT authentication.
 *
 */
export declare class Addon {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an app
     *
     * @remarks
     * Deletes the application for the user.
     *
     * This endpoint is intended to be used by Bitbucket Connect apps
     * and only supports JWT authentication -- that is how Bitbucket
     * identifies the particular installation of the app. Developers
     * with applications registered in the "Develop Apps" section
     * of Bitbucket Marketplace need not use this endpoint as
     * updates for those applications can be sent out via the
     * UI of that section.
     *
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>"
     * ```
     */
    deleteAddon(config?: AxiosRequestConfig): Promise<operations.DeleteAddonResponse>;
    /**
     * Delete all linker values
     *
     * @remarks
     * Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
     */
    deleteAddonLinkersLinkerKeyValues(req: operations.DeleteAddonLinkersLinkerKeyValuesRequest, security: operations.DeleteAddonLinkersLinkerKeyValuesSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesResponse>;
    /**
     * Delete a linker value
     *
     * @remarks
     * Delete a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
     */
    deleteAddonLinkersLinkerKeyValuesValueId(req: operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest, security: operations.DeleteAddonLinkersLinkerKeyValuesValueIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * List linkers for an app
     *
     * @remarks
     * Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
     * for the authenticated application.
     */
    getAddonLinkers(config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersResponse>;
    /**
     * Get a linker for an app
     *
     * @remarks
     * Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
     * for the authenticated application.
     */
    getAddonLinkersLinkerKey(req: operations.GetAddonLinkersLinkerKeyRequest, security: operations.GetAddonLinkersLinkerKeySecurity, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyResponse>;
    /**
     * List linker values for a linker
     *
     * @remarks
     * Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
     */
    getAddonLinkersLinkerKeyValues(req: operations.GetAddonLinkersLinkerKeyValuesRequest, security: operations.GetAddonLinkersLinkerKeyValuesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesResponse>;
    /**
     * Get a linker value
     *
     * @remarks
     * Get a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
     */
    getAddonLinkersLinkerKeyValuesValueId(req: operations.GetAddonLinkersLinkerKeyValuesValueIdRequest, security: operations.GetAddonLinkersLinkerKeyValuesValueIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * Create a linker value
     *
     * @remarks
     * Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
     * linker of authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
     */
    postAddonLinkersLinkerKeyValues(req: operations.PostAddonLinkersLinkerKeyValuesRequest, security: operations.PostAddonLinkersLinkerKeyValuesSecurity, config?: AxiosRequestConfig): Promise<operations.PostAddonLinkersLinkerKeyValuesResponse>;
    /**
     * Update an installed app
     *
     * @remarks
     * Updates the application installation for the user.
     *
     * This endpoint is intended to be used by Bitbucket Connect apps
     * and only supports JWT authentication -- that is how Bitbucket
     * identifies the particular installation of the app. Developers
     * with applications registered in the "Develop Apps" section
     * of Bitbucket need not use this endpoint as updates for those
     * applications can be sent out via the UI of that section.
     *
     * Passing an empty body will update the installation using the
     * existing descriptor URL.
     *
     * ```
     * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>" \
     *   --header "Content-Type: application/json" \
     *   --data '{}'
     * ```
     *
     * The new `descriptor` for the installation can be also provided
     * in the body directly.
     *
     * ```
     * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>" \
     *   --header "Content-Type: application/json" \
     *   --data '{"descriptor": $NEW_DESCRIPTOR}'
     * ```
     *
     * In both these modes the URL of the descriptor cannot be changed. To
     * change the descriptor location and upgrade an installation
     * the request must be made exclusively with a `descriptor_url`.
     *
     *  ```
     * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>" \
     *   --header "Content-Type: application/json" \
     *   --data '{"descriptor_url": $NEW_URL}'
     * ```
     *
     * The `descriptor_url` must exactly match the marketplace registration
     * that Atlassian has for the application. Contact your Atlassian
     * developer advocate to update this registration. Once the registration
     * has been updated you may call this resource for each installation.
     *
     * Note that the scopes of the application cannot be increased
     * in the new descriptor nor reduced to none.
     */
    putAddon(config?: AxiosRequestConfig): Promise<operations.PutAddonResponse>;
    /**
     * Update a linker value
     *
     * @remarks
     * Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
     * linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
     */
    putAddonLinkersLinkerKeyValues(req: operations.PutAddonLinkersLinkerKeyValuesRequest, security: operations.PutAddonLinkersLinkerKeyValuesSecurity, config?: AxiosRequestConfig): Promise<operations.PutAddonLinkersLinkerKeyValuesResponse>;
}
