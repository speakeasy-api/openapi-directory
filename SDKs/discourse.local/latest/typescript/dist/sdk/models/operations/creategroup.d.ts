import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateGroupRequestBodyGroup extends SpeakeasyBase {
    /**
     * pipe|separated
     */
    automaticMembershipEmailDomains?: string;
    /**
     * About Group
     */
    bioRaw?: string;
    defaultNotificationLevel?: number;
    flairBgColor?: string;
    flairIcon?: string;
    flairUploadId?: number;
    fullName?: string;
    mutedCategoryIds?: number[];
    name: string;
    /**
     * comma,separated
     */
    ownerUsernames?: string;
    primaryGroup?: boolean;
    publicAdmission?: boolean;
    publicExit?: boolean;
    regularCategoryIds?: number[];
    trackingCategoryIds?: number[];
    /**
     * comma,separated
     */
    usernames?: string;
    visibilityLevel?: number;
    watchingCategoryIds?: number[];
    watchingFirstPostCategoryIds?: number[];
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    group: CreateGroupRequestBodyGroup;
}
export declare class CreateGroup200ApplicationJSONBasicGroup extends SpeakeasyBase {
    allowMembershipRequests: boolean;
    automatic: boolean;
    bioCooked: string;
    bioExcerpt: string;
    bioRaw: string;
    canAdminGroup: boolean;
    canEditGroup?: boolean;
    canSeeMembers: boolean;
    defaultNotificationLevel: number;
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
/**
 * group created
 */
export declare class CreateGroup200ApplicationJSON extends SpeakeasyBase {
    basicGroup: CreateGroup200ApplicationJSONBasicGroup;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * group created
     */
    createGroup200ApplicationJSONObject?: CreateGroup200ApplicationJSON;
}
