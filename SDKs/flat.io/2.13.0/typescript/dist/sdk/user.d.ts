import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gerUserLikes - List liked scores
    **/
    gerUserLikes(req: operations.GerUserLikesRequest, config?: AxiosRequestConfig): Promise<operations.GerUserLikesResponse>;
    /**
     * getUser - Get a public user profile
     *
     * Get a public profile of a Flat User.
     *
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserScores - List user's scores
     *
     * Get the list of public scores owned by a User.
     *
     * **DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
     * This method will no longer list private and shared scores, but only public scores of a Flat account.
     * If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.
     *
    **/
    getUserScores(req: operations.GetUserScoresRequest, config?: AxiosRequestConfig): Promise<operations.GetUserScoresResponse>;
}
