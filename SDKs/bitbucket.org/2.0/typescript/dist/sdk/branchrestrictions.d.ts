import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Repository owners and administrators can set branch management
 *
 * @remarks
 * rules on a repository that control what can be pushed by whom.
 * Through these rules, you can enforce a project or team
 * workflow. For example, owners or administrators can:
 *
 * * Limit push powers
 * * Prevent branch deletion
 * * Prevent history re-writes (Git only)
 *
 */
export declare class BranchRestrictions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a branch restriction rule
     *
     * @remarks
     * Deletes an existing branch restriction rule.
     */
    deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
    /**
     * List branch restrictions
     *
     * @remarks
     * Returns a paginated list of all branch restrictions on the
     * repository.
     */
    getRepositoriesWorkspaceRepoSlugBranchRestrictions(req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest, security: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse>;
    /**
     * Get a branch restriction rule
     *
     * @remarks
     * Returns a specific branch restriction rule.
     */
    getRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, security: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
    /**
     * Create a branch restriction rule
     *
     * @remarks
     * Creates a new branch restriction rule for a repository.
     *
     * `kind` describes what will be restricted. Allowed values include:
     * `push`, `force`, `delete` and `restrict_merges`.
     *
     * Different kinds of branch restrictions have different requirements:
     *
     * * `push` and `restrict_merges` require `users` and `groups` to be
     *   specified. Empty lists are allowed, in which case permission is
     *   denied for everybody.
     *
     * The restriction applies to all branches that match. There are
     * two ways to match a branch. It is configured in `branch_match_kind`:
     *
     * 1. `glob`: Matches a branch against the `pattern`. A `'*'` in
     *    `pattern` will expand to match zero or more characters, and every
     *    other character matches itself. For example, `'foo*'` will match
     *    `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
     *    branches.
     * 2. `branching_model`: Matches a branch against the repository's
     *    branching model. The `branch_type` controls the type of branch
     *    to match. Allowed values include: `production`, `development`,
     *    `bugfix`, `release`, `feature` and `hotfix`.
     *
     * The combination of `kind` and match must be unique. This means that
     * two `glob` restrictions in a repository cannot have the same `kind` and
     * `pattern`. Additionally, two `branching_model` restrictions in a
     * repository cannot have the same `kind` and `branch_type`.
     *
     * `users` and `groups` are lists of users and groups that are except from
     * the restriction. They can only be configured in `push` and
     * `restrict_merges` restrictions. The `push` restriction stops a user
     * pushing to matching branches unless that user is in `users` or is a
     * member of a group in `groups`. The `restrict_merges` stops a user
     * merging pull requests to matching branches unless that user is in
     * `users` or is a member of a group in `groups`. Adding new users or
     * groups to an existing restriction should be done via `PUT`.
     *
     * Note that branch restrictions with overlapping matchers is allowed,
     * but the resulting behavior may be surprising.
     */
    postRepositoriesWorkspaceRepoSlugBranchRestrictions(req: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest, security: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse>;
    /**
     * Update a branch restriction rule
     *
     * @remarks
     * Updates an existing branch restriction rule.
     *
     * Fields not present in the request body are ignored.
     *
     * See [`POST`](/cloud/bitbucket/rest/api-group-branch-restrictions/#api-repositories-workspace-repo-slug-branch-restrictions-post) for details.
     */
    putRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, security: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
}
