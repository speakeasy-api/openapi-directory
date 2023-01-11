import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Interactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * interactionsGetRestrictionsForAuthenticatedUser - Get interaction restrictions for your public repositories
     *
     * Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    interactionsGetRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsGetRestrictionsForOrg - Get interaction restrictions for an organization
     *
     * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsGetRestrictionsForOrg(req: operations.InteractionsGetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForOrgResponse>;
    /**
     * interactionsGetRestrictionsForRepo - Get interaction restrictions for a repository
     *
     * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
     *
     * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsGetRestrictionsForRepo(req: operations.InteractionsGetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsGetRestrictionsForRepoResponse>;
    /**
     * interactionsRemoveRestrictionsForAuthenticatedUser - Remove interaction restrictions from your public repositories
     *
     * Removes any interaction restrictions from your public repositories.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories - API method documentation
    **/
    interactionsRemoveRestrictionsForAuthenticatedUser(config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsRemoveRestrictionsForOrg - Remove interaction restrictions for an organization
     *
     * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsRemoveRestrictionsForOrg(req: operations.InteractionsRemoveRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForOrgResponse>;
    /**
     * interactionsRemoveRestrictionsForRepo - Remove interaction restrictions for a repository
     *
     * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsRemoveRestrictionsForRepo(req: operations.InteractionsRemoveRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsRemoveRestrictionsForRepoResponse>;
    /**
     * interactionsSetRestrictionsForAuthenticatedUser - Set interaction restrictions for your public repositories
     *
     * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories - API method documentation
    **/
    interactionsSetRestrictionsForAuthenticatedUser(req: operations.InteractionsSetRestrictionsForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForAuthenticatedUserResponse>;
    /**
     * interactionsSetRestrictionsForOrg - Set interaction restrictions for an organization
     *
     * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization - API method documentation
    **/
    interactionsSetRestrictionsForOrg(req: operations.InteractionsSetRestrictionsForOrgRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForOrgResponse>;
    /**
     * interactionsSetRestrictionsForRepo - Set interaction restrictions for a repository
     *
     * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
     *
     * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository - API method documentation
    **/
    interactionsSetRestrictionsForRepo(req: operations.InteractionsSetRestrictionsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.InteractionsSetRestrictionsForRepoResponse>;
}
