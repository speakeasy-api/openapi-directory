import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhooks provide a way to configure Bitbucket Cloud to make requests to
 *
 * @remarks
 * your server (or another external service) whenever certain events occur in
 * Bitbucket Cloud.
 *
 * A webhook consists of:
 *
 * * A subject -- The resource that generates the events. Currently, this resource
 * is the repository, user account, or team where you create the webhook.
 * * One or more event -- The default event is a repository push, but you can
 * select multiple events that can trigger the webhook.
 * * A URL -- The endpoint where you want Bitbucket to send the event payloads
 * when a matching event happens.
 *
 * There are two parts to getting a webhook to work: creating the webhook and
 * triggering the webhook. After you create a webhook for an event, every time
 * that event occurs, Bitbucket sends a payload request that describes the event
 * to the specified URL. Thus, you can think of webhooks as a kind of
 * notification system.
 *
 * Use webhooks to integrate applications with Bitbucket Cloud. The following
 * use cases provides examples of when you would want to use webhooks:
 *
 * * Every time a user pushes commits in a repository, you may want to notify
 * your CI server to start a build.
 * * Every time a user pushes commits or creates a pull request, you may want to
 * display a notification in your application.
 *
 */
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a webhook for a repository
     *
     * @remarks
     * Deletes the specified webhook subscription from the given
     * repository.
     */
    deleteRepositoriesWorkspaceRepoSlugHooksUid(req: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * Delete a webhook for a workspace
     *
     * @remarks
     * Deletes the specified webhook subscription from the given workspace.
     */
    deleteWorkspacesWorkspaceHooksUid(req: operations.DeleteWorkspacesWorkspaceHooksUidRequest, security: operations.DeleteWorkspacesWorkspaceHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceHooksUidResponse>;
    /**
     * Get a webhook resource
     *
     * @remarks
     * Returns the webhook resource or subject types on which webhooks can
     * be registered.
     *
     * Each resource/subject type contains an `events` link that returns the
     * paginated list of specific events each individual subject type can
     * emit.
     *
     * This endpoint is publicly accessible and does not require
     * authentication or scopes.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/hook_events
     *
     * {
     *     "repository": {
     *         "links": {
     *             "events": {
     *                 "href": "https://api.bitbucket.org/2.0/hook_events/repository"
     *             }
     *         }
     *     },
     *     "workspace": {
     *         "links": {
     *             "events": {
     *                 "href": "https://api.bitbucket.org/2.0/hook_events/workspace"
     *             }
     *         }
     *     }
     * }
     * ```
     */
    getHookEvents(config?: AxiosRequestConfig): Promise<operations.GetHookEventsResponse>;
    /**
     * List subscribable webhook types
     *
     * @remarks
     * Returns a paginated list of all valid webhook events for the
     * specified entity.
     * **The team and user webhooks are deprecated, and you should use workspace instead.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * This is public data that does not require any scopes or authentication.
     *
     * Example:
     *
     * NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
     * We return the same structure for the other `subject_type` objects.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/hook_events/workspace
     * {
     *     "page": 1,
     *     "pagelen": 30,
     *     "size": 21,
     *     "values": [
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository push occurs",
     *             "event": "repo:push",
     *             "label": "Push"
     *         },
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository fork occurs",
     *             "event": "repo:fork",
     *             "label": "Fork"
     *         },
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository import occurs",
     *             "event": "repo:imported",
     *             "label": "Import"
     *         },
     *         ...
     *         {
     *             "category":"Pull Request",
     *             "label":"Approved",
     *             "description":"When someone has approved a pull request",
     *             "event":"pullrequest:approved"
     *         },
     *     ]
     * }
     * ```
     */
    getHookEventsSubjectType(req: operations.GetHookEventsSubjectTypeRequest, security: operations.GetHookEventsSubjectTypeSecurity, config?: AxiosRequestConfig): Promise<operations.GetHookEventsSubjectTypeResponse>;
    /**
     * List webhooks for a repository
     *
     * @remarks
     * Returns a paginated list of webhooks installed on this repository.
     */
    getRepositoriesWorkspaceRepoSlugHooks(req: operations.GetRepositoriesWorkspaceRepoSlugHooksRequest, security: operations.GetRepositoriesWorkspaceRepoSlugHooksSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksResponse>;
    /**
     * Get a webhook for a repository
     *
     * @remarks
     * Returns the webhook with the specified id installed on the specified
     * repository.
     */
    getRepositoriesWorkspaceRepoSlugHooksUid(req: operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest, security: operations.GetRepositoriesWorkspaceRepoSlugHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * List webhooks for a workspace
     *
     * @remarks
     * Returns a paginated list of webhooks installed on this workspace.
     */
    getWorkspacesWorkspaceHooks(req: operations.GetWorkspacesWorkspaceHooksRequest, security: operations.GetWorkspacesWorkspaceHooksSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceHooksResponse>;
    /**
     * Get a webhook for a workspace
     *
     * @remarks
     * Returns the webhook with the specified id installed on the given
     * workspace.
     */
    getWorkspacesWorkspaceHooksUid(req: operations.GetWorkspacesWorkspaceHooksUidRequest, security: operations.GetWorkspacesWorkspaceHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceHooksUidResponse>;
    /**
     * Create a webhook for a repository
     *
     * @remarks
     * Creates a new webhook on the specified repository.
     *
     * Example:
     *
     * ```
     * $ curl -X POST -u credentials -H 'Content-Type: application/json'
     *   https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
     *   -d '
     *     {
     *       "description": "Webhook Description",
     *       "url": "https://example.com/",
     *       "active": true,
     *       "events": [
     *         "repo:push",
     *         "issue:created",
     *         "issue:updated"
     *       ]
     *     }'
     * ```
     *
     * Note that this call requires the webhook scope, as well as any scope
     * that applies to the events that the webhook subscribes to. In the
     * example above that means: `webhook`, `repository` and `issue`.
     *
     * Also note that the `url` must properly resolve and cannot be an
     * internal, non-routed address.
     */
    postRepositoriesWorkspaceRepoSlugHooks(req: operations.PostRepositoriesWorkspaceRepoSlugHooksRequest, security: operations.PostRepositoriesWorkspaceRepoSlugHooksSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugHooksResponse>;
    /**
     * Create a webhook for a workspace
     *
     * @remarks
     * Creates a new webhook on the specified workspace.
     *
     * Workspace webhooks are fired for events from all repositories contained
     * by that workspace.
     *
     * Example:
     *
     * ```
     * $ curl -X POST -u credentials -H 'Content-Type: application/json'
     *   https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks
     *   -d '
     *     {
     *       "description": "Webhook Description",
     *       "url": "https://example.com/",
     *       "active": true,
     *       "events": [
     *         "repo:push",
     *         "issue:created",
     *         "issue:updated"
     *       ]
     *     }'
     * ```
     *
     * This call requires the webhook scope, as well as any scope
     * that applies to the events that the webhook subscribes to. In the
     * example above that means: `webhook`, `repository` and `issue`.
     *
     * The `url` must properly resolve and cannot be an internal, non-routed address.
     *
     * Only workspace owners can install webhooks on workspaces.
     */
    postWorkspacesWorkspaceHooks(req: operations.PostWorkspacesWorkspaceHooksRequest, security: operations.PostWorkspacesWorkspaceHooksSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceHooksResponse>;
    /**
     * Update a webhook for a repository
     *
     * @remarks
     * Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     */
    putRepositoriesWorkspaceRepoSlugHooksUid(req: operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest, security: operations.PutRepositoriesWorkspaceRepoSlugHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * Update a webhook for a workspace
     *
     * @remarks
     * Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     */
    putWorkspacesWorkspaceHooksUid(req: operations.PutWorkspacesWorkspaceHooksUidRequest, security: operations.PutWorkspacesWorkspaceHooksUidSecurity, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceHooksUidResponse>;
}
