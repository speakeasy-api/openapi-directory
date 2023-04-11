import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsersManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the user
     *
     * @remarks
     * This endpoint deletes the user.<br><br>
     */
    deleteUsersIdUser(req: operations.DeleteUsersIdUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserResponse>;
    /**
     * Delete the given user configurations. deletions on keys prefixed by 'biapi.' (except callback_url) are ignored
     *
     * @remarks
     * - keys (string): list of coma separated keys to be deleted.<br><br>
     */
    deleteUsersIdUserConfig(req: operations.DeleteUsersIdUserConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdUserConfigResponse>;
    /**
     * Get users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Get a user
     */
    getUsersIdUser(req: operations.GetUsersIdUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserResponse>;
    /**
     * Get configuration of a user.
     *
     * @remarks
     * <br><br>
     */
    getUsersIdUserConfig(req: operations.GetUsersIdUserConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserConfigResponse>;
    /**
     * Get profiles
     */
    getUsersIdUserProfiles(req: operations.GetUsersIdUserProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserProfilesResponse>;
    /**
     * Get the main profile
     */
    getUsersIdUserProfilesMain(req: operations.GetUsersIdUserProfilesMainRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserProfilesMainResponse>;
    /**
     * Get a profile
     */
    getUsersIdUserProfilesIdProfile(req: operations.GetUsersIdUserProfilesIdProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserProfilesIdProfileResponse>;
    /**
     * Change configuration of a user. modifications on keys prefixed by 'biapi.' (except callback_url) are ignored
     */
    postUsersIdUserConfig(req: operations.PostUsersIdUserConfigRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserConfigResponse>;
    /**
     * Create a token
     *
     * @remarks
     * Create an access_token for this user and get it.<br><br>
     */
    postUsersIdUserToken(req: operations.PostUsersIdUserTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersIdUserTokenResponse>;
}
