import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * SCIM is a provisioning system that lets you manage users within your identity provider (IdP).
 *
 * @remarks
 * For more information, see [System for Cross-domain Identity management](https://docs.docker.com/docker-hub/scim/).
 *
 */
export declare class Scim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List resource types
     *
     * @remarks
     * Returns all resource types supported for the SCIM configuration.
     *
     */
    getV2Scim20ResourceTypes(config?: AxiosRequestConfig): Promise<operations.GetV2Scim20ResourceTypesResponse>;
    /**
     * Get a resource type
     *
     * @remarks
     * Returns a resource type by name.
     *
     */
    getV2Scim20ResourceTypesName(req: operations.GetV2Scim20ResourceTypesNameRequest, config?: AxiosRequestConfig): Promise<operations.GetV2Scim20ResourceTypesNameResponse>;
    /**
     * List schemas
     *
     * @remarks
     * Returns all schemas supported for the SCIM configuration.
     *
     */
    getV2Scim20Schemas(config?: AxiosRequestConfig): Promise<operations.GetV2Scim20SchemasResponse>;
    /**
     * Get a schema
     *
     * @remarks
     * Returns a schema by ID.
     *
     */
    getV2Scim20SchemasId(req: operations.GetV2Scim20SchemasIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2Scim20SchemasIdResponse>;
    /**
     * Get service provider config
     *
     * @remarks
     * Returns a service provider config for Docker's configuration.
     *
     */
    getV2Scim20ServiceProviderConfig(config?: AxiosRequestConfig): Promise<operations.GetV2Scim20ServiceProviderConfigResponse>;
    /**
     * List users
     *
     * @remarks
     * List users, returns paginated users for an organization. Use `startIndex`
     * and `count` query parameters to receive paginated results.
     *
     * **Sorting:**<br>
     * Sorting lets you to specify the order of returned resources by specifying
     * a combination of `sortBy` and `sortOrder` query parameters.
     *
     * The `sortBy` parameter specifies the attribute whose value will be used
     * to order the returned responses. The `sortOrder` parameter defines the
     * order in which the `sortBy` parameter is applied. Allowed values are
     * "ascending" and "descending".
     *
     * **Filtering:**<br>
     * You can request a subset of resources by specifying the `filter` query
     * parameter containing a filter expression. Attribute names and attribute
     * operators used in filters are case insensitive. The filter parameter
     * must contain at least one valid expression. Each expression must contain
     * an attribute name followed by an attribute operator and an optional
     * value.
     *
     * Supported operators are listed below.
     *
     * - `eq` equal
     * - `ne` not equal
     * - `co` contains
     * - `sw` starts with
     * - `and` Logical "and"
     * - `or` Logical "or"
     * - `not` "Not" function
     * - `()` Precedence grouping
     *
     */
    getV2Scim20Users(req: operations.GetV2Scim20UsersRequest, config?: AxiosRequestConfig): Promise<operations.GetV2Scim20UsersResponse>;
    /**
     * Get a user
     *
     * @remarks
     * Returns a user by ID.
     *
     */
    getV2Scim20UsersId(req: operations.GetV2Scim20UsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2Scim20UsersIdResponse>;
    /**
     * Create user
     *
     * @remarks
     * Creates a user. If the user already exists by email, they are assigned
     * to the organization on the "company" team.
     *
     */
    postV2Scim20Users(req: operations.PostV2Scim20UsersRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2Scim20UsersResponse>;
    /**
     * Update a user
     *
     * @remarks
     * Updates a user. Use this route to change the user's name, activate,
     * and deactivate the user.
     *
     */
    putV2Scim20UsersId(req: operations.PutV2Scim20UsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV2Scim20UsersIdResponse>;
}
