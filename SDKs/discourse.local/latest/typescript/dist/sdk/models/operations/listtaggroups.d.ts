import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListTagGroups200ApplicationJSONTagGroupsPermissions extends SpeakeasyBase {
    staff?: number;
}
export declare class ListTagGroups200ApplicationJSONTagGroups extends SpeakeasyBase {
    id?: number;
    name?: string;
    onePerTopic?: boolean;
    parentTagName?: any[];
    permissions?: ListTagGroups200ApplicationJSONTagGroupsPermissions;
    tagNames?: any[];
}
/**
 * tags
 */
export declare class ListTagGroups200ApplicationJSON extends SpeakeasyBase {
    tagGroups?: ListTagGroups200ApplicationJSONTagGroups[];
}
export declare class ListTagGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * tags
     */
    listTagGroups200ApplicationJSONObject?: ListTagGroups200ApplicationJSON;
}
