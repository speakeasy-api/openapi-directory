import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
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
export declare class AccessTokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a personal access token
     *
     * @remarks
     * Deletes a personal access token permanently. This cannot be undone.
     *
     */
    deleteV2AccessTokensUuid(req: operations.DeleteV2AccessTokensUuidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2AccessTokensUuidResponse>;
    /**
     * Get a list of personal access tokens
     *
     * @remarks
     * Returns a paginated list of personal access tokens.
     */
    getV2AccessTokens(req: operations.GetV2AccessTokensRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccessTokensResponse>;
    /**
     * Get a personal access token
     *
     * @remarks
     * Returns a personal access token by UUID.
     */
    getV2AccessTokensUuid(req: operations.GetV2AccessTokensUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccessTokensUuidResponse>;
    /**
     * Update a personal access token
     *
     * @remarks
     * Updates a personal access token partially. You can either update the
     * token's label or enable/disable it.
     *
     */
    patchV2AccessTokensUuid(req: operations.PatchV2AccessTokensUuidRequest, config?: AxiosRequestConfig): Promise<operations.PatchV2AccessTokensUuidResponse>;
    /**
     * Create a personal access token
     *
     * @remarks
     * Creates and returns a personal access token.
     */
    postV2AccessTokens(req: shared.CreateAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostV2AccessTokensResponse>;
}
