import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.clubhouseapi.com/api/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Clubhouse API
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
     */
    getCheckForUpdate(req: operations.GetCheckForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckForUpdateResponse>;
    /**
     * get actionable notifications (the bell again)
     */
    getGetActionableNotifications(config?: AxiosRequestConfig): Promise<operations.GetGetActionableNotificationsResponse>;
    /**
     * gets all topics.
     */
    getGetAllTopics(config?: AxiosRequestConfig): Promise<operations.GetGetAllTopicsResponse>;
    /**
     * get all channels
     */
    getGetChannels(config?: AxiosRequestConfig): Promise<operations.GetGetChannelsResponse>;
    /**
     * the Upcoming for You page
     */
    getGetEvents(req: operations.GetGetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetEventsResponse>;
    /**
     * get notifications (the bell icon)
     */
    getGetNotifications(req: operations.GetGetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetNotificationsResponse>;
    /**
     * get notification settings
     */
    getGetSettings(config?: AxiosRequestConfig): Promise<operations.GetGetSettingsResponse>;
    /**
     * gets suggested follows during signup
     */
    getGetSuggestedFollowsAll(req: operations.GetGetSuggestedFollowsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetGetSuggestedFollowsAllResponse>;
    /**
     * looks up users by topic.
     */
    getGetUsersForTopic(req: operations.GetGetUsersForTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUsersForTopicResponse>;
    /**
     * called during signup
     */
    getGetWelcomeChannel(config?: AxiosRequestConfig): Promise<operations.GetGetWelcomeChannelResponse>;
    /**
     * Call phone number auth.
     */
    postCallPhoneNumberAuth(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostCallPhoneNumberAuthResponse>;
    /**
     * checks waitlist status.
     */
    postCheckWaitlistStatus(config?: AxiosRequestConfig): Promise<operations.PostCheckWaitlistStatusResponse>;
    /**
     * Call phone number auth.
     */
    postCompletePhoneNumberAuth(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostCompletePhoneNumberAuthResponse>;
    /**
     * creates a channel
     */
    postCreateChannel(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostCreateChannelResponse>;
    /**
     * follows a user
     */
    postFollow(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostFollowResponse>;
    /**
     * gets club by id
     */
    postGetClub(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetClubResponse>;
    /**
     * looks up clubs by topic.
     */
    postGetClubsForTopic(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetClubsForTopicResponse>;
    /**
     * is fetched when you tap Create Room
     */
    postGetCreateChannelTargets(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetCreateChannelTargetsResponse>;
    /**
     * get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
     */
    postGetFollowing(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetFollowingResponse>;
    /**
     * gets online friends on the app homepage.
     */
    postGetOnlineFriends(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetOnlineFriendsResponse>;
    /**
     * looks up user profile by ID.
     */
    postGetProfile(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetProfileResponse>;
    /**
     * gets release notes.
     */
    postGetReleaseNotes(config?: AxiosRequestConfig): Promise<operations.PostGetReleaseNotesResponse>;
    /**
     * find users to invite to clubs based on phone number
     */
    postGetSuggestedClubInvites(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedClubInvitesResponse>;
    /**
     * find people to follow by uploading contacts during signup
     */
    postGetSuggestedFollowsFriendsOnly(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsFriendsOnlyResponse>;
    /**
     * find similar users. (The Sparkles button on Clubhouse's profile page)
     */
    postGetSuggestedFollowsSimilar(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsSimilarResponse>;
    /**
     * find users to invite based on phone number.
     *
     * @remarks
     * (also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)
     */
    postGetSuggestedInvites(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedInvitesResponse>;
    /**
     * gets suggested users when you start a private room
     */
    postGetSuggestedSpeakers(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedSpeakersResponse>;
    /**
     * looks up topic by ID.
     */
    postGetTopic(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostGetTopicResponse>;
    /**
     * wave to another user on the waitlist to give them access
     */
    postInviteFromWaitlist(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostInviteFromWaitlistResponse>;
    /**
     * invite a user to the app, using one of your invites
     */
    postInviteToApp(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostInviteToAppResponse>;
    /**
     * join a channel.
     */
    postJoinChannel(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostJoinChannelResponse>;
    /**
     * leave a channel.
     */
    postLeaveChannel(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostLeaveChannelResponse>;
    /**
     * gets user
     */
    postMe(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostMeResponse>;
    /**
     * analytics
     */
    postRecordActionTrails(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostRecordActionTrailsResponse>;
    /**
     * gets an access_token from a refresh_token.
     */
    postRefreshToken(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostRefreshTokenResponse>;
    /**
     * Resend phone number auth.
     */
    postResendPhoneNumberAuth(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostResendPhoneNumberAuthResponse>;
    /**
     * search clubs.
     */
    postSearchClubs(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostSearchClubsResponse>;
    /**
     * search for users
     */
    postSearchUsers(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostSearchUsersResponse>;
    /**
     * Starts phone number auth.
     */
    postStartPhoneNumberAuth(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostStartPhoneNumberAuthResponse>;
    /**
     * updates notification during signup.
     */
    postUpdateNotifications(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationsResponse>;
    /**
     * edits username.
     */
    postUpdateUsername(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.PostUpdateUsernameResponse>;
}
