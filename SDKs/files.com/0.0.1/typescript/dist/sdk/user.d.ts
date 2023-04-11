import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about users
 */
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Api Keys
     *
     * @remarks
     * List Api Keys
     */
    getUserApiKeys(req: operations.GetUserApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUserApiKeysResponse>;
    /**
     * List Group Users
     *
     * @remarks
     * List Group Users
     */
    getUserGroups(req: operations.GetUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGroupsResponse>;
    /**
     * List Public Keys
     *
     * @remarks
     * List Public Keys
     */
    getUserPublicKeys(req: operations.GetUserPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPublicKeysResponse>;
    /**
     * Update User
     *
     * @remarks
     * Update User
     */
    patchUser(req: operations.PatchUserRequestBody, config?: AxiosRequestConfig): Promise<operations.PatchUserResponse>;
    /**
     * Create Api Key
     *
     * @remarks
     * Create Api Key
     */
    postUserApiKeys(req: operations.PostUserApiKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostUserApiKeysResponse>;
    /**
     * Create Public Key
     *
     * @remarks
     * Create Public Key
     */
    postUserPublicKeys(req: operations.PostUserPublicKeysRequestBody, config?: AxiosRequestConfig): Promise<operations.PostUserPublicKeysResponse>;
}
