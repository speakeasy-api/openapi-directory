import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListGroupMembersRequest extends SpeakeasyBase {
    /**
     * Use group name instead of id
     */
    id: string;
}
export declare class ListGroupMembers200ApplicationJSONMembers extends SpeakeasyBase {
    addedAt: string;
    avatarTemplate: string;
    id: number;
    lastPostedAt: string;
    lastSeenAt: string;
    name: string;
    timezone: string;
    title: string;
    username: string;
}
export declare class ListGroupMembers200ApplicationJSONMeta extends SpeakeasyBase {
    limit: number;
    offset: number;
    total: number;
}
export declare class ListGroupMembers200ApplicationJSONOwners extends SpeakeasyBase {
    addedAt: string;
    avatarTemplate: string;
    id: number;
    lastPostedAt: string;
    lastSeenAt: string;
    name: string;
    timezone: string;
    title: string;
    username: string;
}
/**
 * success response
 */
export declare class ListGroupMembers200ApplicationJSON extends SpeakeasyBase {
    members: ListGroupMembers200ApplicationJSONMembers[];
    meta: ListGroupMembers200ApplicationJSONMeta;
    owners: ListGroupMembers200ApplicationJSONOwners[];
}
export declare class ListGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    listGroupMembers200ApplicationJSONObject?: ListGroupMembers200ApplicationJSON;
}
