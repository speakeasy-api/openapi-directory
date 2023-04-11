import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Owner or admin management of users interactions.
 */
export declare class Interactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get interaction restrictions for your public repositories
     *
     * @remarks
     * Shows which type of GitHub user can interact with your public repositories and when the restriction expires.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories} - API method documentation
     */
    interactionsGetRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForAuthenticatedUserResponse>;
    /**
     * Get interaction restrictions for an organization
     *
     * @remarks
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization} - API method documentation
     */
    interactionsGetRestrictionsForOrg(req: operations.InteractionsGetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForOrgResponse>;
    /**
     * Get interaction restrictions for a repository
     *
     * @remarks
     * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository} - API method documentation
     */
    interactionsGetRestrictionsForRepo(req: operations.InteractionsGetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForRepoResponse>;
    /**
     * Remove interaction restrictions from your public repositories
     *
     * @remarks
     * Removes any interaction restrictions from your public repositories.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories} - API method documentation
     */
    interactionsRemoveRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse>;
    /**
     * Remove interaction restrictions for an organization
     *
     * @remarks
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization} - API method documentation
     */
    interactionsRemoveRestrictionsForOrg(req: operations.InteractionsRemoveRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForOrgResponse>;
    /**
     * Remove interaction restrictions for a repository
     *
     * @remarks
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository} - API method documentation
     */
    interactionsRemoveRestrictionsForRepo(req: operations.InteractionsRemoveRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForRepoResponse>;
    /**
     * Set interaction restrictions for your public repositories
     *
     * @remarks
     * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories} - API method documentation
     */
    interactionsSetRestrictionsForAuthenticatedUser(req: shared.InteractionLimit, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForAuthenticatedUserResponse>;
    /**
     * Set interaction restrictions for an organization
     *
     * @remarks
     * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization} - API method documentation
     */
    interactionsSetRestrictionsForOrg(req: operations.InteractionsSetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForOrgResponse>;
    /**
     * Set interaction restrictions for a repository
     *
     * @remarks
     * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * @see {@link https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository} - API method documentation
     */
    interactionsSetRestrictionsForRepo(req: operations.InteractionsSetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForRepoResponse>;
}
