import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListGroups200ApplicationJSONExtras extends SpeakeasyBase {
    typeFilters: any[];
}
export declare class ListGroups200ApplicationJSONGroups extends SpeakeasyBase {
    allowMembershipRequests: boolean;
    automatic: boolean;
    bioCooked: string;
    bioExcerpt: string;
    bioRaw: string;
    canAdminGroup: boolean;
    canEditGroup?: boolean;
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
    isGroupOwner?: boolean;
    isGroupUser?: boolean;
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
 * response
 */
export declare class ListGroups200ApplicationJSON extends SpeakeasyBase {
    extras: ListGroups200ApplicationJSONExtras;
    groups: ListGroups200ApplicationJSONGroups[];
    loadMoreGroups: string;
    totalRowsGroups: number;
}
export declare class ListGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * response
     */
    listGroups200ApplicationJSONObject?: ListGroups200ApplicationJSON;
}
