import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * user
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
     * Returns a list of all available user themes.
     */
    userGetAvailableThemes(config?: AxiosRequestConfig): Promise<operations.UserGetAvailableThemesResponse>;
    /**
     * Loads a bungienet user by membership id.
     */
    userGetBungieNetUserById(req: operations.UserGetBungieNetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.UserGetBungieNetUserByIdResponse>;
    /**
     * Returns a list of credential types attached to the requested account
     */
    userGetCredentialTypesForTargetAccount(req: operations.UserGetCredentialTypesForTargetAccountRequest, config?: AxiosRequestConfig): Promise<operations.UserGetCredentialTypesForTargetAccountResponse>;
    /**
     * Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
     */
    userGetMembershipDataById(req: operations.UserGetMembershipDataByIdRequest, config?: AxiosRequestConfig): Promise<operations.UserGetMembershipDataByIdResponse>;
    /**
     * Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
     */
    userGetMembershipDataForCurrentUser(config?: AxiosRequestConfig): Promise<operations.UserGetMembershipDataForCurrentUserResponse>;
    /**
     * Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
     */
    userGetMembershipFromHardLinkedCredential(req: operations.UserGetMembershipFromHardLinkedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UserGetMembershipFromHardLinkedCredentialResponse>;
    /**
     * Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.
     */
    userGetSanitizedPlatformDisplayNames(req: operations.UserGetSanitizedPlatformDisplayNamesRequest, config?: AxiosRequestConfig): Promise<operations.UserGetSanitizedPlatformDisplayNamesResponse>;
    /**
     * Given the prefix of a global display name, returns all users who share that name.
     */
    userSearchByGlobalNamePost(req: operations.UserSearchByGlobalNamePostRequest, config?: AxiosRequestConfig): Promise<operations.UserSearchByGlobalNamePostResponse>;
    /**
     * [OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.
     */
    userSearchByGlobalNamePrefix(req: operations.UserSearchByGlobalNamePrefixRequest, config?: AxiosRequestConfig): Promise<operations.UserSearchByGlobalNamePrefixResponse>;
}
