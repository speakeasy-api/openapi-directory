import { AccessTokens } from "./accesstokens";
import { AuditLogs } from "./auditlogs";
import { Authentication } from "./authentication";
import { Images } from "./images";
import { OrgSettings } from "./orgsettings";
import { Repositories } from "./repositories";
import { Scim } from "./scim";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://hub.docker.com/", "https://docker.com/{version}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Docker Hub is a service provided by Docker for finding and sharing container
 *
 * @remarks
 * images with your team.
 *
 * It is the world's largest library and community for container images.
 *
 * In addition to the [Docker Hub UI](https://docs.docker.com/docker-hub/) and [Docker Hub CLI tool](https://github.com/docker/hub-tool#readme) (currently experimental),
 *
 * Docker provides an API that allows you to interact with Docker Hub.
 *
 * Browse through the Docker Hub API documentation to explore the supported endpoints.
 *
 */
export declare class SDK {
    /**
     * The Personal Access Token endpoints lets you manage personal access tokens. For more
     *
     * @remarks
     * information, see [Access Tokens](https://docs.docker.com/docker-hub/access-tokens/).
     *
     * You can use a personal access token instead of a password in the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/)
     * or in the [Create an authentication token](#operation/PostUsersLogin) route to obtain a bearer
     * token.
     *
     * ### Scopes
     *
     * For each scope grouping (in this case "repo"), you only need to define 1 scope as any lower
     * scopes are assumed. For example: If you define `repo:write`, the API assumes the scope of both
     * `repo:read` *and* `repo:public_read` as well. If you were to define both `repo:write` *and*
     * `repo:read`, then `repo:read` is assumed by `repo:write` and ignored.
     *
     * ***Treat your personal access token like your password and keep it secret. You cannot retrieve
     * your token after it is generated.***
     *
     */
    accessTokens: AccessTokens;
    /**
     * The Audit Logs API endpoints allow you to query audit log events across a
     *
     * @remarks
     * namespace.
     *
     * For more information, see [Audit Log](https://docs.docker.com/docker-hub/audit-log/)
     *
     */
    auditLogs: AuditLogs;
    /**
     * Most Docker Hub API endpoints require you to authenticate using your
     *
     * @remarks
     * Docker credentials before using them.
     *
     * Additionally, similar to the Docker Hub UI features, API endpoint responses may vary depending
     * on your plan (Free, Pro, or Team) and your account's permissions.
     *
     * To learn more about the features available in each plan and to upgrade your existing plan, see [Docker Pricing](https://www.docker.com/pricing).
     *
     */
    authentication: Authentication;
    /**
     * The Advanced Image Management API endpoints allow you to manage Docker
     *
     * @remarks
     * images across all repositories.
     *
     * For more information, see [Advanced Image Management dashboard](https://docs.docker.com/docker-hub/image-management/).
     *
     */
    images: Images;
    /**
     * The Org Settings API endpoints allow you to manage your organization's
     *
     * @remarks
     * settings.
     *
     */
    orgSettings: OrgSettings;
    /**
     * The repository endpoints allow you to manage your repository's
     *
     * @remarks
     * configuration like description.
     *
     */
    repositories: Repositories;
    /**
     * SCIM is a provisioning system that lets you manage users within your identity provider (IdP).
     *
     * @remarks
     * For more information, see [System for Cross-domain Identity management](https://docs.docker.com/docker-hub/scim/).
     *
     */
    scim: Scim;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
