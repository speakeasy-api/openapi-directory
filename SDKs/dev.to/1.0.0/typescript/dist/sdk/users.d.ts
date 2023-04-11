import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Organization's users
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of users belonging to the organization
     *
     * It supports pagination, each page will contain `30` users by default.
     */
    getOrgUsers(req: operations.GetOrgUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrgUsersResponse>;
    /**
     * A User
     *
     * @remarks
     * This endpoint allows the client to retrieve a single user, either by id
     * or by the user's username.
     *
     * For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser
     */
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * User's all articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * It will return both published and unpublished articles with pagination.
     *
     * Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.
     *
     * By default a page will contain 30 articles.
     */
    getUserAllArticles(req: operations.GetUserAllArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAllArticlesResponse>;
    /**
     * User's articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Published articles will be in reverse chronological publication order.
     *
     * It will return published articles with pagination. By default a page will contain 30 articles.
     */
    getUserArticles(req: operations.GetUserArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserArticlesResponse>;
    /**
     * The authenticated user
     *
     * @remarks
     * This endpoint allows the client to retrieve information about the authenticated user
     */
    getUserMe(config?: AxiosRequestConfig): Promise<operations.GetUserMeResponse>;
    /**
     * User's published articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Published articles will be in reverse chronological publication order.
     *
     * It will return published articles with pagination. By default a page will contain 30 articles.
     */
    getUserPublishedArticles(req: operations.GetUserPublishedArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPublishedArticlesResponse>;
    /**
     * User's unpublished articles
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.
     *
     * "Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.
     *
     * Unpublished articles will be in reverse chronological creation order.
     *
     * It will return unpublished articles with pagination. By default a page will contain 30 articles.
     */
    getUserUnpublishedArticles(req: operations.GetUserUnpublishedArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserUnpublishedArticlesResponse>;
    /**
     * Invite a User
     *
     * @remarks
     * This endpoint allows the client to trigger an invitation to the provided email address.
     *
     *         It requires a token from a user with `super_admin` privileges.
     */
    postAdminUsersCreate(req: shared.UserInviteParam, config?: AxiosRequestConfig): Promise<operations.PostAdminUsersCreateResponse>;
    /**
     * Suspend a User
     *
     * @remarks
     * This endpoint allows the client to suspend a user.
     *
     * The user associated with the API key must have any 'admin' or 'moderator' role.
     *
     * This specified user will be assigned the 'suspended' role. Suspending a user will stop the
     * user from posting new posts and comments. It doesn't delete any of the user's content, just
     * prevents them from creating new content while suspended. Users are not notified of their suspension
     * in the UI, so if you want them to know about this, you must notify them.
     */
    suspendUser(req: operations.SuspendUserRequest, config?: AxiosRequestConfig): Promise<operations.SuspendUserResponse>;
    /**
     * Unpublish a User's Articles and Comments
     *
     * @remarks
     * This endpoint allows the client to unpublish all of the articles and
     * comments created by a user.
     *
     * The user associated with the API key must have any 'admin' or 'moderator' role.
     *
     * This specified user's articles and comments will be unpublished and will no longer be
     * visible to the public. They will remain in the database and will set back to draft status
     * on the specified user's  dashboard. Any notifications associated with the specified user's
     * articles and comments will be deleted.
     *
     * Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
     * status code immediately, but the articles and comments will not be unpublished until the
     * request is completed on the server.
     */
    unpublishUser(req: operations.UnpublishUserRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishUserResponse>;
}
