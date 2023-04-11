import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHubBusinessGroupsIdMenusSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetHubBusinessGroupsIdMenusRequest extends SpeakeasyBase {
    /**
     * Id of the business group
     */
    id: string;
}
export declare class GetHubBusinessGroupsIdMenus200ApplicationJSONMenus extends SpeakeasyBase {
    class?: string;
    id?: string;
    name?: string;
}
/**
 * menus tree of the hub/box
 */
export declare class GetHubBusinessGroupsIdMenus200ApplicationJSON extends SpeakeasyBase {
    menus?: GetHubBusinessGroupsIdMenus200ApplicationJSONMenus[];
    spaceId?: string;
    spaceName?: string;
}
export declare class GetHubBusinessGroupsIdMenusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menus tree of the hub/box
     */
    getHubBusinessGroupsIdMenus200ApplicationJSONObject?: GetHubBusinessGroupsIdMenus200ApplicationJSON;
}
