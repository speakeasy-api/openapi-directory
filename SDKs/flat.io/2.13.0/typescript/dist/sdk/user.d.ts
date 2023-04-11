import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Flat users
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
     * List liked scores
     */
    gerUserLikes(req: operations.GerUserLikesRequest, security: operations.GerUserLikesSecurity, config?: AxiosRequestConfig): Promise<operations.GerUserLikesResponse>;
    /**
     * Get a public user profile
     *
     * @remarks
     * Get a public profile of a Flat User.
     *
     */
    getUser(req: operations.GetUserRequest, security: operations.GetUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * List user's scores
     *
     * @remarks
     * Get the list of public scores owned by a User.
     *
     * **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
     * This method will no longer list private and shared scores, but only public scores of a Flat account.
     * If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
     *
     */
    getUserScores(req: operations.GetUserScoresRequest, security: operations.GetUserScoresSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserScoresResponse>;
}
