import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Bitbucket Cloud projects make it easier for teams to focus on
 *
 * @remarks
 * a goal, product, or process by organizing their repositories.
 *
 */
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a project for a workspace
     *
     * @remarks
     * Deletes this project. This is an irreversible operation.
     *
     * You cannot delete a project that still contains repositories.
     * To delete the project, [delete](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-repo-slug-delete)
     * or transfer the repositories first.
     *
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
     * ```
     */
    deleteWorkspacesWorkspaceProjectsProjectKey(req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest, security: operations.DeleteWorkspacesWorkspaceProjectsProjectKeySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * Remove the specific user from the project's default reviewers
     *
     * @remarks
     * Removes a default reviewer from the project.
     *
     * Example:
     * ```
     * $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
     *
     * HTTP/1.1 204
     * ```
     */
    deleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest, security: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse>;
    /**
     * Get a project for a workspace
     *
     * @remarks
     * Returns the requested project.
     */
    getWorkspacesWorkspaceProjectsProjectKey(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest, security: operations.GetWorkspacesWorkspaceProjectsProjectKeySecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * List the default reviewers in a project
     *
     * @remarks
     * Return a list of all default reviewers for a project. This is a list of users that will be added as default
     * reviewers to pull requests for any repository within the project.
     *
     * Example:
     * ```
     * $ curl https://api.bitbucket.org/2.0/.../projects/.../default-reviewers | jq .
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "user": {
     *                 "display_name": "Davis Lee",
     *                 "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
     *             },
     *             "reviewer_type": "project",
     *             "type": "default_reviewer"
     *         },
     *         {
     *             "user": {
     *                 "display_name": "Jorge Rodriguez",
     *                 "uuid": "{1aa43376-260d-4a0b-9660-f62672b9655d}"
     *             },
     *             "reviewer_type": "project",
     *             "type": "default_reviewer"
     *         }
     *     ],
     *     "page": 1,
     *     "size": 2
     * }
     * ```
     */
    getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewers(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest, security: operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersResponse>;
    /**
     * Get a default reviewer
     *
     * @remarks
     * Returns the specified default reviewer.
     *
     * Example:
     * ```
     * $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
     * {
     *     "display_name": "Davis Lee",
     *     "type": "user",
     *     "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
     * }
     * ```
     */
    getWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest, security: operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse>;
    /**
     * Create a project in a workspace
     *
     * @remarks
     * Creates a new project.
     *
     * Note that the avatar has to be embedded as either a data-url
     * or a URL to an external image as shown in the examples below:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
     *
     * or even:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "http://i.imgur.com/72tRx4w.gif"
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
     */
    postWorkspacesWorkspaceProjects(req: operations.PostWorkspacesWorkspaceProjectsRequest, security: operations.PostWorkspacesWorkspaceProjectsSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceProjectsResponse>;
    /**
     * Update a project for a workspace
     *
     * @remarks
     * Since this endpoint can be used to both update and to create a
     * project, the request body depends on the intent.
     *
     * #### Creation
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The `key` should not be specified in the body of request
     * (since it is already present in the URL). The `name` is required,
     * everything else is optional.
     *
     * #### Update
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The key is not required in the body (since it is already in
     * the URL). The key may be specified in the body, if the intent is
     * to change the key itself. In such a scenario, the location of the
     * project is changed and is returned in the `Location` header of the
     * response.
     */
    putWorkspacesWorkspaceProjectsProjectKey(req: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest, security: operations.PutWorkspacesWorkspaceProjectsProjectKeySecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * Add the specific user as a default reviewer for the project
     *
     * @remarks
     * Adds the specified user to the project's list of default reviewers. The method is
     * idempotent. Accepts an optional body containing the `uuid` of the user to be added.
     *
     * Example:
     * ```
     * $ curl -XPUT https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D
     * -d { 'uuid': '{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}' }
     *
     * HTTP/1.1 204
     * ```
     */
    putWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUser(req: operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest, security: operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse>;
}
