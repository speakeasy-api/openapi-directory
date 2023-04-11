import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about users
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete User
     *
     * @remarks
     * Delete User
     */
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * List Users
     *
     * @remarks
     * List Users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Show User
     *
     * @remarks
     * Show User
     */
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * List Api Keys
     *
     * @remarks
     * List Api Keys
     */
    getUsersUserIdApiKeys(req: operations.GetUsersUserIdApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdApiKeysResponse>;
    /**
     * List User Cipher Uses
     *
     * @remarks
     * List User Cipher Uses
     */
    getUsersUserIdCipherUses(req: operations.GetUsersUserIdCipherUsesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdCipherUsesResponse>;
    /**
     * List Group Users
     *
     * @remarks
     * List Group Users
     */
    getUsersUserIdGroups(req: operations.GetUsersUserIdGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdGroupsResponse>;
    /**
     * List Permissions
     *
     * @remarks
     * List Permissions
     */
    getUsersUserIdPermissions(req: operations.GetUsersUserIdPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPermissionsResponse>;
    /**
     * List Public Keys
     *
     * @remarks
     * List Public Keys
     */
    getUsersUserIdPublicKeys(req: operations.GetUsersUserIdPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdPublicKeysResponse>;
    /**
     * Update User
     *
     * @remarks
     * Update User
     */
    patchUsersId(req: operations.PatchUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersIdResponse>;
    /**
     * Create User
     *
     * @remarks
     * Create User
     */
    postUsers(req: operations.PostUsersRequestBody, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
     *
     * @remarks
     * Trigger 2FA Reset process for user who has lost access to their existing 2FA methods.
     */
    postUsersId2faReset(req: operations.PostUsersId2faResetRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersId2faResetResponse>;
    /**
     * Resend user welcome email
     *
     * @remarks
     * Resend user welcome email
     */
    postUsersIdResendWelcomeEmail(req: operations.PostUsersIdResendWelcomeEmailRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdResendWelcomeEmailResponse>;
    /**
     * Unlock user who has been locked out due to failed logins.
     *
     * @remarks
     * Unlock user who has been locked out due to failed logins.
     */
    postUsersIdUnlock(req: operations.PostUsersIdUnlockRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUnlockResponse>;
    /**
     * Create Api Key
     *
     * @remarks
     * Create Api Key
     */
    postUsersUserIdApiKeys(req: operations.PostUsersUserIdApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdApiKeysResponse>;
    /**
     * Create Public Key
     *
     * @remarks
     * Create Public Key
     */
    postUsersUserIdPublicKeys(req: operations.PostUsersUserIdPublicKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdPublicKeysResponse>;
}
