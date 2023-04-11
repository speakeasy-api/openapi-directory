import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Commit statuses provide a way to tag commits with meta data,
 *
 * @remarks
 * like automated build results.
 *
 */
export declare class CommitStatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List commit statuses for a commit
     *
     * @remarks
     * Returns all statuses (e.g. build results) for a specific commit.
     */
    getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest, security: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse>;
    /**
     * Get a build status for a commit
     *
     * @remarks
     * Returns the specified build status for a commit.
     */
    getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, security: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse>;
    /**
     * List commit statuses for a pull request
     *
     * @remarks
     * Returns all statuses (e.g. build results) for the given pull
     * request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse>;
    /**
     * Create a build status for a commit
     *
     * @remarks
     * Creates a new build status against the specified commit.
     *
     * If the specified key already exists, the existing status object will
     * be overwritten.
     *
     * Example:
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
     *     "key": "MY-BUILD",
     *     "state": "SUCCESSFUL",
     *     "description": "42 tests passed",
     *     "url": "https://www.example.org/my-build-result"
     *   }'
     * ```
     *
     * When creating a new commit status, you can use a URI template for the URL.
     * Templates are URLs that contain variable names that Bitbucket will
     * evaluate at runtime whenever the URL is displayed anywhere similar to
     * parameter substitution in
     * [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
     * For example, one could use `https://foo.com/builds/{repository.full_name}`
     * which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
     * The context variables available are `repository` and `commit`.
     */
    postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest, security: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse>;
    /**
     * Update a build status for a commit
     *
     * @remarks
     * Used to update the current status of a build status object on the
     * specific commit.
     *
     * This operation can also be used to change other properties of the
     * build status:
     *
     * * `state`
     * * `name`
     * * `description`
     * * `url`
     * * `refname`
     *
     * The `key` cannot be changed.
     */
    putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, security: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse>;
}
