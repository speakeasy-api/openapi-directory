import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Addon {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAddon - Deletes the application for the user.
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
    **/
    deleteAddon(req: operations.DeleteAddonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonResponse>;
    /**
     * deleteAddonLinkersLinkerKeyValues - Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
    **/
    deleteAddonLinkersLinkerKeyValues(req: operations.DeleteAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesResponse>;
    /**
     * deleteAddonLinkersLinkerKeyValuesValueId - Delete a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
    **/
    deleteAddonLinkersLinkerKeyValuesValueId(req: operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * getAddonLinkers - Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
     * for the authenticated application.
    **/
    getAddonLinkers(req: operations.GetAddonLinkersRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersResponse>;
    /**
     * getAddonLinkersLinkerKey - Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
     * for the authenticated application.
    **/
    getAddonLinkersLinkerKey(req: operations.GetAddonLinkersLinkerKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyResponse>;
    /**
     * getAddonLinkersLinkerKeyValues - Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    getAddonLinkersLinkerKeyValues(req: operations.GetAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesResponse>;
    /**
     * getAddonLinkersLinkerKeyValuesValueId - Get a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
    **/
    getAddonLinkersLinkerKeyValuesValueId(req: operations.GetAddonLinkersLinkerKeyValuesValueIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * postAddonLinkersLinkerKeyValues - Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
     * linker of authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    postAddonLinkersLinkerKeyValues(req: operations.PostAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.PostAddonLinkersLinkerKeyValuesResponse>;
    /**
     * putAddon - Updates the application installation for the user.
     *
     * This endpoint is intended to be used by Bitbucket Connect apps
     * and only supports JWT authentication -- that is how Bitbucket
     * identifies the particular installation of the app. Developers
     * with applications registered in the "Develop Apps" section
     * of Bitbucket Marketplace need not use this endpoint as
     * updates for those applications can be sent out via the
     * UI of that section.
     *
     * A new, valid descriptor must be provided in the body of the
     * PUT request.
     *
     * ```
     * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>" \
     *   --header "Content-Type: application/json" \
     *   --data '{"descriptor": $NEW_DESCRIPTOR}'
     * ```
     *
     * Note that the scopes of the application cannot be increased
     * in the new descriptor nor reduced to none.
    **/
    putAddon(req: operations.PutAddonRequest, config?: AxiosRequestConfig): Promise<operations.PutAddonResponse>;
    /**
     * putAddonLinkersLinkerKeyValues - Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
     * linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    putAddonLinkersLinkerKeyValues(req: operations.PutAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.PutAddonLinkersLinkerKeyValuesResponse>;
}
