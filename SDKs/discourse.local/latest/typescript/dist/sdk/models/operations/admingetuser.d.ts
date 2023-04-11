import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AdminGetUserRequest extends SpeakeasyBase {
    id: number;
}
export declare class AdminGetUser200ApplicationJSONApprovedBy extends SpeakeasyBase {
    avatarTemplate: string;
    id: number;
    name: string;
    username: string;
}
export declare class AdminGetUser200ApplicationJSONGroups extends SpeakeasyBase {
    allowMembershipRequests: boolean;
    automatic: boolean;
    bioCooked: string;
    bioExcerpt: string;
    bioRaw: string;
    canAdminGroup: boolean;
    canSeeMembers: boolean;
    defaultNotificationLevel: number;
    displayName: string;
    flairBgColor: string;
    flairColor: string;
    flairUrl: string;
    fullName: string;
    grantTrustLevel: string;
    hasMessages: boolean;
    id: number;
    incomingEmail: string;
    membersVisibilityLevel: number;
    membershipRequestTemplate: string;
    mentionableLevel: number;
    messageableLevel: number;
    name: string;
    primaryGroup: boolean;
    publicAdmission: boolean;
    publicExit: boolean;
    publishReadState: boolean;
    title: string;
    userCount: number;
    visibilityLevel: number;
}
export declare class AdminGetUser200ApplicationJSONPenaltyCounts extends SpeakeasyBase {
    silenced: number;
    suspended: number;
}
export declare class AdminGetUser200ApplicationJSONTl3RequirementsPenaltyCounts extends SpeakeasyBase {
    silenced: number;
    suspended: number;
    total: number;
}
export declare class AdminGetUser200ApplicationJSONTl3Requirements extends SpeakeasyBase {
    daysVisited: number;
    maxFlaggedByUsers: number;
    maxFlaggedPosts: number;
    minDaysVisited: number;
    minLikesGiven: number;
    minLikesReceived: number;
    minLikesReceivedDays: number;
    minLikesReceivedUsers: number;
    minPostsRead: number;
    minPostsReadAllTime: number;
    minTopicsRepliedTo: number;
    minTopicsViewed: number;
    minTopicsViewedAllTime: number;
    numFlaggedByUsers: number;
    numFlaggedPosts: number;
    numLikesGiven: number;
    numLikesReceived: number;
    numLikesReceivedDays: number;
    numLikesReceivedUsers: number;
    numTopicsRepliedTo: number;
    onGracePeriod: boolean;
    penaltyCounts: AdminGetUser200ApplicationJSONTl3RequirementsPenaltyCounts;
    postsRead: number;
    postsReadAllTime: number;
    requirementsLost: boolean;
    requirementsMet: boolean;
    timePeriod: number;
    topicsViewed: number;
    topicsViewedAllTime: number;
    trustLevelLocked: boolean;
}
/**
 * response
 */
export declare class AdminGetUser200ApplicationJSON extends SpeakeasyBase {
    active: boolean;
    admin: boolean;
    apiKeyCount: number;
    approvedBy: AdminGetUser200ApplicationJSONApprovedBy;
    associatedAccounts?: any[];
    avatarTemplate: string;
    badgeCount: number;
    bounceScore: number;
    canActivate: boolean;
    canBeAnonymized: boolean;
    canBeDeleted: boolean;
    canBeMerged: boolean;
    canDeactivate: boolean;
    canDeleteAllPosts: boolean;
    canDeleteSsoRecord: boolean;
    canDisableSecondFactor: boolean;
    canGrantAdmin: boolean;
    canGrantModeration: boolean;
    canImpersonate: boolean;
    canRevokeAdmin: boolean;
    canRevokeModeration: boolean;
    canSendActivationEmail: boolean;
    canViewActionLogs: boolean;
    createdAt: string;
    createdAtAge: number;
    daysVisited: number;
    externalIds: Record<string, any>;
    flagLevel: number;
    flagsGivenCount: number;
    flagsReceivedCount: number;
    fullSuspendReason: string;
    groups: AdminGetUser200ApplicationJSONGroups[];
    id: number;
    ipAddress: string;
    lastEmailedAge: number;
    lastEmailedAt: string;
    lastSeenAge: number;
    lastSeenAt: string;
    likeCount: number;
    likeGivenCount: number;
    manualLockedTrustLevel: string;
    moderator: boolean;
    name: string;
    nextPenalty?: string;
    penaltyCounts?: AdminGetUser200ApplicationJSONPenaltyCounts;
    postCount: number;
    postEditsCount?: number;
    postsReadCount: number;
    primaryGroupId: string;
    privateTopicsCount: number;
    registrationIpAddress: string;
    resetBounceScoreAfter: string;
    silenceReason: string;
    silencedBy: string;
    singleSignOnRecord: string;
    staged: boolean;
    suspendedBy: string;
    timeRead: number;
    title: string;
    tl3Requirements?: AdminGetUser200ApplicationJSONTl3Requirements;
    topicCount: number;
    topicsEntered: number;
    trustLevel: number;
    username: string;
    warningsReceivedCount: number;
}
export declare class AdminGetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    adminGetUser200ApplicationJSONObject?: AdminGetUser200ApplicationJSON;
}
