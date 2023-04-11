import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pfm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove user access
     *
     * @remarks
     * This endpoint removes the token in use.<br><br>
     */
    deleteAuthToken(config?: AxiosRequestConfig): Promise<operations.DeleteAuthTokenResponse>;
    /**
     * Get a user
     */
    getUsersIdUser(req: operations.GetUsersIdUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserResponse>;
    /**
     * Get forecast
     */
    getUsersIdUserForecast(req: operations.GetUsersIdUserForecastRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdUserForecastResponse>;
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
     * Login to API with credentials
     *
     * @remarks
     * Request a new user token by giving an username and a password. Or a manage payment token by giving a client<br><br><br><br>
     */
    postAuthToken(req: operations.PostAuthTokenRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAuthTokenResponse>;
}
