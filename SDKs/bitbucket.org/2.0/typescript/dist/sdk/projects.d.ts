import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteTeamsUsernameProjectsProjectKey(req: operations.DeleteTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * deleteWorkspacesWorkspaceProjectsProjectKey - Deletes this project. This is an irreversible operation.
     *
     * You cannot delete a project that still contains repositories.
     * To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
     * or transfer the repositories first.
     *
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
     * ```
    **/
    deleteWorkspacesWorkspaceProjectsProjectKey(req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * getTeamsUsernameProjects - **This endpoint has been deprecated,
     * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameProjects(req: operations.GetTeamsUsernameProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameProjectsResponse>;
    /**
     * getTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameProjectsProjectKey(req: operations.GetTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * getWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
    **/
    getWorkspacesWorkspaceProjectsProjectKey(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * postTeamsUsernameProjects - Creates a new project.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
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
    **/
    postTeamsUsernameProjects(req: operations.PostTeamsUsernameProjectsRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsUsernameProjectsResponse>;
    /**
     * postWorkspacesWorkspaceProjects - Creates a new project.
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
    **/
    postWorkspacesWorkspaceProjects(req: operations.PostWorkspacesWorkspaceProjectsRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceProjectsResponse>;
    /**
     * putTeamsUsernameProjectsProjectKey - Since this endpoint can be used to both update and to create a
     * project, the request body depends on the intent.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * ### Creation
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The `key` should not be specified in the body of request
     * (since it is already present in the URL). The `name` is required,
     * everything else is optional.
     *
     * ### Update
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The key is not required in the body (since it is already in
     * the URL). The key may be specified in the body, if the intent is
     * to change the key itself. In such a scenario, the location of the
     * project is changed and is returned in the `Location` header of the
     * response.
    **/
    putTeamsUsernameProjectsProjectKey(req: operations.PutTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * putWorkspacesWorkspaceProjectsProjectKey - Since this endpoint can be used to both update and to create a
     * project, the request body depends on the intent.
     *
     * ### Creation
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The `key` should not be specified in the body of request
     * (since it is already present in the URL). The `name` is required,
     * everything else is optional.
     *
     * ### Update
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The key is not required in the body (since it is already in
     * the URL). The key may be specified in the body, if the intent is
     * to change the key itself. In such a scenario, the location of the
     * project is changed and is returned in the `Location` header of the
     * response.
    **/
    putWorkspacesWorkspaceProjectsProjectKey(req: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse>;
}
