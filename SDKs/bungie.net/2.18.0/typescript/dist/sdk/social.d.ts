import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * social
 */
export declare class Social {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
     */
    socialAcceptFriendRequest(req: operations.SocialAcceptFriendRequestRequest, security: operations.SocialAcceptFriendRequestSecurity, config?: AxiosRequestConfig): Promise<operations.SocialAcceptFriendRequestResponse>;
    /**
     * Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
     */
    socialDeclineFriendRequest(req: operations.SocialDeclineFriendRequestRequest, security: operations.SocialDeclineFriendRequestSecurity, config?: AxiosRequestConfig): Promise<operations.SocialDeclineFriendRequestResponse>;
    /**
     * Returns your Bungie Friend list
     */
    socialGetFriendList(config?: AxiosRequestConfig): Promise<operations.SocialGetFriendListResponse>;
    /**
     * Returns your friend request queue.
     */
    socialGetFriendRequestList(config?: AxiosRequestConfig): Promise<operations.SocialGetFriendRequestListResponse>;
    /**
     * Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
     */
    socialGetPlatformFriendList(req: operations.SocialGetPlatformFriendListRequest, config?: AxiosRequestConfig): Promise<operations.SocialGetPlatformFriendListResponse>;
    /**
     * Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
     */
    socialIssueFriendRequest(req: operations.SocialIssueFriendRequestRequest, security: operations.SocialIssueFriendRequestSecurity, config?: AxiosRequestConfig): Promise<operations.SocialIssueFriendRequestResponse>;
    /**
     * Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
     */
    socialRemoveFriend(req: operations.SocialRemoveFriendRequest, security: operations.SocialRemoveFriendSecurity, config?: AxiosRequestConfig): Promise<operations.SocialRemoveFriendResponse>;
    /**
     * Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.
     */
    socialRemoveFriendRequest(req: operations.SocialRemoveFriendRequestRequest, security: operations.SocialRemoveFriendRequestSecurity, config?: AxiosRequestConfig): Promise<operations.SocialRemoveFriendRequestResponse>;
}
