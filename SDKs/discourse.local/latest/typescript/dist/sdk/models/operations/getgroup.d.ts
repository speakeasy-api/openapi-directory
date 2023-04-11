import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGroupRequest extends SpeakeasyBase {
    /**
     * Use group name instead of id
     */
    id: string;
}
export declare class GetGroup200ApplicationJSONExtras extends SpeakeasyBase {
    visibleGroupNames: any[];
}
export declare class GetGroup200ApplicationJSONGroup extends SpeakeasyBase {
    allowMembershipRequests: boolean;
    allowUnknownSenderTopicReplies: boolean;
    associatedGroupIds?: any[];
    automatic: boolean;
    automaticMembershipEmailDomains: string;
    bioCooked: string;
    bioExcerpt: string;
    bioRaw: string;
    canAdminGroup: boolean;
    canEditGroup?: boolean;
    canSeeMembers: boolean;
    defaultNotificationLevel: number;
    emailFromAlias?: string;
    emailPassword: string;
    emailUsername: string;
    flairBgColor: string;
    flairColor: string;
    flairUrl: string;
    fullName: string;
    grantTrustLevel: string;
    hasMessages: boolean;
    id: number;
    imapEnabled?: boolean;
    imapLastError: string;
    imapMailboxName: string;
    imapMailboxes: any[];
    imapNewEmails: string;
    imapOldEmails: string;
    imapPort: string;
    imapServer: string;
    imapSsl: string;
    imapUpdatedAt?: string;
    imapUpdatedBy?: Record<string, any>;
    incomingEmail: string;
    isGroupOwnerDisplay: boolean;
    isGroupUser: boolean;
    membersVisibilityLevel: number;
    membershipRequestTemplate: string;
    mentionable: boolean;
    mentionableLevel: number;
    messageCount: number;
    messageable: boolean;
    messageableLevel: number;
    mutedCategoryIds: any[];
    mutedTags?: any[];
    name: string;
    primaryGroup: boolean;
    publicAdmission: boolean;
    publicExit: boolean;
    publishReadState: boolean;
    regularCategoryIds: any[];
    regularTags?: any[];
    smtpEnabled?: boolean;
    smtpPort: string;
    smtpServer: string;
    smtpSsl: string;
    smtpUpdatedAt?: string;
    smtpUpdatedBy?: Record<string, any>;
    title: string;
    trackingCategoryIds: any[];
    trackingTags?: any[];
    userCount: number;
    visibilityLevel: number;
    watchingCategoryIds: any[];
    watchingFirstPostCategoryIds: any[];
    watchingFirstPostTags?: any[];
    watchingTags?: any[];
}
/**
 * success response
 */
export declare class GetGroup200ApplicationJSON extends SpeakeasyBase {
    extras: GetGroup200ApplicationJSONExtras;
    group: GetGroup200ApplicationJSONGroup;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    getGroup200ApplicationJSONObject?: GetGroup200ApplicationJSON;
}
