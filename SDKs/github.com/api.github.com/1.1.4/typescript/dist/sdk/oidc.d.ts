import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints to manage GitHub OIDC configuration using the REST API.
 */
export declare class Oidc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the customization template for an OIDC subject claim for an organization
     *
     * @remarks
     * Gets the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `read:org` scope to use this endpoint.
     * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization} - API method documentation
     */
    oidcGetOidcCustomSubTemplateForOrg(req: operations.OidcGetOidcCustomSubTemplateForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OidcGetOidcCustomSubTemplateForOrgResponse>;
    /**
     * Set the customization template for an OIDC subject claim for an organization
     *
     * @remarks
     * Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
     * You must authenticate using an access token with the `write:org` scope to use this endpoint.
     * GitHub Apps must have the `admin:org` permission to use this endpoint.
     *
     * @see {@link https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization} - API method documentation
     */
    oidcUpdateOidcCustomSubTemplateForOrg(req: operations.OidcUpdateOidcCustomSubTemplateForOrgRequest, config?: AxiosRequestConfig): Promise<operations.OidcUpdateOidcCustomSubTemplateForOrgResponse>;
}
