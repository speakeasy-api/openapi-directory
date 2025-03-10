import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information for integrations and installations.
 */
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a repository to an app installation
     *
     * @remarks
     * Add a single repository to an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-cloud@latest//github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#add-a-repository-to-an-app-installation} - API method documentation
     */
    appsAddRepoToInstallationForAuthenticatedUser(req: operations.AppsAddRepoToInstallationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsAddRepoToInstallationForAuthenticatedUserResponse>;
    /**
     * Check a token
     *
     * @remarks
     * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#check-a-token} - API method documentation
     */
    appsCheckToken(req: operations.AppsCheckTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCheckTokenResponse>;
    /**
     * Create a GitHub App from a manifest
     *
     * @remarks
     * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#create-a-github-app-from-a-manifest} - API method documentation
     */
    appsCreateFromManifest(req: operations.AppsCreateFromManifestRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateFromManifestResponse>;
    /**
     * Create an installation access token for an app
     *
     * @remarks
     * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps/#create-an-installation-access-token-for-an-app} - API method documentation
     */
    appsCreateInstallationAccessToken(req: operations.AppsCreateInstallationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsCreateInstallationAccessTokenResponse>;
    /**
     * Delete an app authorization
     *
     * @remarks
     * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
     * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#delete-an-app-authorization} - API method documentation
     */
    appsDeleteAuthorization(req: operations.AppsDeleteAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteAuthorizationResponse>;
    /**
     * Delete an installation for the authenticated app
     *
     * @remarks
     * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps/#suspend-an-app-installation)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#delete-an-installation-for-the-authenticated-app} - API method documentation
     */
    appsDeleteInstallation(req: operations.AppsDeleteInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteInstallationResponse>;
    /**
     * Delete an app token
     *
     * @remarks
     * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#delete-an-app-token} - API method documentation
     */
    appsDeleteToken(req: operations.AppsDeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsDeleteTokenResponse>;
    /**
     * Get the authenticated app
     *
     * @remarks
     * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-the-authenticated-app} - API method documentation
     */
    appsGetAuthenticated(config?: AxiosRequestConfig): Promise<operations.AppsGetAuthenticatedResponse>;
    /**
     * Get an app
     *
     * @remarks
     * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
     *
     * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/enterprise-cloud@latest//articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps/#get-an-app} - API method documentation
     */
    appsGetBySlug(req: operations.AppsGetBySlugRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetBySlugResponse>;
    /**
     * Get an installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find an installation's information using the installation id.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-an-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetInstallation(req: operations.AppsGetInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetInstallationResponse>;
    /**
     * Get an organization installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the organization's installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-an-organization-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetOrgInstallation(req: operations.AppsGetOrgInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetOrgInstallationResponse>;
    /**
     * Get a repository installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-repository-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetRepoInstallation(req: operations.AppsGetRepoInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetRepoInstallationResponse>;
    /**
     * Get a subscription plan for an account
     *
     * @remarks
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-subscription-plan-for-an-account} - API method documentation
     */
    appsGetSubscriptionPlanForAccount(req: operations.AppsGetSubscriptionPlanForAccountRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetSubscriptionPlanForAccountResponse>;
    /**
     * Get a subscription plan for an account (stubbed)
     *
     * @remarks
     * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed} - API method documentation
     */
    appsGetSubscriptionPlanForAccountStubbed(req: operations.AppsGetSubscriptionPlanForAccountStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetSubscriptionPlanForAccountStubbedResponse>;
    /**
     * Get a user installation for the authenticated app
     *
     * @remarks
     * Enables an authenticated GitHub App to find the user’s installation information.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-user-installation-for-the-authenticated-app} - API method documentation
     */
    appsGetUserInstallation(req: operations.AppsGetUserInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetUserInstallationResponse>;
    /**
     * Get a webhook configuration for an app
     *
     * @remarks
     * Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-webhook-configuration-for-an-app} - API method documentation
     */
    appsGetWebhookConfigForApp(config?: AxiosRequestConfig): Promise<operations.AppsGetWebhookConfigForAppResponse>;
    /**
     * Get a delivery for an app webhook
     *
     * @remarks
     * Returns a delivery for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#get-a-delivery-for-an-app-webhook} - API method documentation
     */
    appsGetWebhookDelivery(req: operations.AppsGetWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.AppsGetWebhookDeliveryResponse>;
    /**
     * List accounts for a plan
     *
     * @remarks
     * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-accounts-for-a-plan} - API method documentation
     */
    appsListAccountsForPlan(req: operations.AppsListAccountsForPlanRequest, config?: AxiosRequestConfig): Promise<operations.AppsListAccountsForPlanResponse>;
    /**
     * List accounts for a plan (stubbed)
     *
     * @remarks
     * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-accounts-for-a-plan-stubbed} - API method documentation
     */
    appsListAccountsForPlanStubbed(req: operations.AppsListAccountsForPlanStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListAccountsForPlanStubbedResponse>;
    /**
     * List repositories accessible to the user access token
     *
     * @remarks
     * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The access the user has to each repository is included in the hash under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-repositories-accessible-to-the-user-access-token} - API method documentation
     */
    appsListInstallationReposForAuthenticatedUser(req: operations.AppsListInstallationReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationReposForAuthenticatedUserResponse>;
    /**
     * List installations for the authenticated app
     *
     * @remarks
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * The permissions the installation has are included under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-installations-for-the-authenticated-app} - API method documentation
     */
    appsListInstallations(req: operations.AppsListInstallationsRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsResponse>;
    /**
     * List app installations accessible to the user access token
     *
     * @remarks
     * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
     *
     * You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
     *
     * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
     *
     * You can find the permissions for the installation under the `permissions` key.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-app-installations-accessible-to-the-user-access-token} - API method documentation
     */
    appsListInstallationsForAuthenticatedUser(req: operations.AppsListInstallationsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListInstallationsForAuthenticatedUserResponse>;
    /**
     * List plans
     *
     * @remarks
     * Lists all plans that are part of your GitHub Enterprise Cloud Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-plans} - API method documentation
     */
    appsListPlans(req: operations.AppsListPlansRequest, config?: AxiosRequestConfig): Promise<operations.AppsListPlansResponse>;
    /**
     * List plans (stubbed)
     *
     * @remarks
     * Lists all plans that are part of your GitHub Enterprise Cloud Marketplace listing.
     *
     * GitHub Apps must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-plans-stubbed} - API method documentation
     */
    appsListPlansStubbed(req: operations.AppsListPlansStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListPlansStubbedResponse>;
    /**
     * List repositories accessible to the app installation
     *
     * @remarks
     * List repositories that an app installation can access.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-repositories-accessible-to-the-app-installation} - API method documentation
     */
    appsListReposAccessibleToInstallation(req: operations.AppsListReposAccessibleToInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsListReposAccessibleToInstallationResponse>;
    /**
     * List subscriptions for the authenticated user
     *
     * @remarks
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-subscriptions-for-the-authenticated-user} - API method documentation
     */
    appsListSubscriptionsForAuthenticatedUser(req: operations.AppsListSubscriptionsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsListSubscriptionsForAuthenticatedUserResponse>;
    /**
     * List subscriptions for the authenticated user (stubbed)
     *
     * @remarks
     * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/).
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed} - API method documentation
     */
    appsListSubscriptionsForAuthenticatedUserStubbed(req: operations.AppsListSubscriptionsForAuthenticatedUserStubbedRequest, config?: AxiosRequestConfig): Promise<operations.AppsListSubscriptionsForAuthenticatedUserStubbedResponse>;
    /**
     * List deliveries for an app webhook
     *
     * @remarks
     * Returns a list of webhook deliveries for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#list-deliveries-for-an-app-webhook} - API method documentation
     */
    appsListWebhookDeliveries(req: operations.AppsListWebhookDeliveriesRequest, config?: AxiosRequestConfig): Promise<operations.AppsListWebhookDeliveriesResponse>;
    /**
     * Redeliver a delivery for an app webhook
     *
     * @remarks
     * Redeliver a delivery for the webhook configured for a GitHub App.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#redeliver-a-delivery-for-an-app-webhook} - API method documentation
     */
    appsRedeliverWebhookDelivery(req: operations.AppsRedeliverWebhookDeliveryRequest, config?: AxiosRequestConfig): Promise<operations.AppsRedeliverWebhookDeliveryResponse>;
    /**
     * Remove a repository from an app installation
     *
     * @remarks
     * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
     *
     * You must use a personal access token (which you can create via the [command line](https://docs.github.com/enterprise-cloud@latest//github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#remove-a-repository-from-an-app-installation} - API method documentation
     */
    appsRemoveRepoFromInstallationForAuthenticatedUser(req: operations.AppsRemoveRepoFromInstallationForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.AppsRemoveRepoFromInstallationForAuthenticatedUserResponse>;
    /**
     * Reset a token
     *
     * @remarks
     * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#reset-a-token} - API method documentation
     */
    appsResetToken(req: operations.AppsResetTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsResetTokenResponse>;
    /**
     * Revoke an installation access token
     *
     * @remarks
     * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
     *
     * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
     *
     * You must use an [installation access token](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#revoke-an-installation-access-token} - API method documentation
     */
    appsRevokeInstallationAccessToken(config?: AxiosRequestConfig): Promise<operations.AppsRevokeInstallationAccessTokenResponse>;
    /**
     * Create a scoped access token
     *
     * @remarks
     * Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/enterprise-cloud@latest//rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/apps/apps#create-a-scoped-access-token} - API method documentation
     */
    appsScopeToken(req: operations.AppsScopeTokenRequest, config?: AxiosRequestConfig): Promise<operations.AppsScopeTokenResponse>;
    /**
     * Suspend an app installation
     *
     * @remarks
     * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub Enterprise Cloud API or webhook events is blocked for that account.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#suspend-an-app-installation} - API method documentation
     */
    appsSuspendInstallation(req: operations.AppsSuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsSuspendInstallationResponse>;
    /**
     * Unsuspend an app installation
     *
     * @remarks
     * Removes a GitHub App installation suspension.
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#unsuspend-an-app-installation} - API method documentation
     */
    appsUnsuspendInstallation(req: operations.AppsUnsuspendInstallationRequest, config?: AxiosRequestConfig): Promise<operations.AppsUnsuspendInstallationResponse>;
    /**
     * Update a webhook configuration for an app
     *
     * @remarks
     * Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
     *
     * You must use a [JWT](https://docs.github.com/enterprise-cloud@latest//apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/apps#update-a-webhook-configuration-for-an-app} - API method documentation
     */
    appsUpdateWebhookConfigForApp(req: operations.AppsUpdateWebhookConfigForAppRequestBody, config?: AxiosRequestConfig): Promise<operations.AppsUpdateWebhookConfigForAppResponse>;
}
