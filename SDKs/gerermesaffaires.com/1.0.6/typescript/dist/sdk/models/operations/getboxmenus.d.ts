import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBoxMenus200ApplicationJSONMenus extends SpeakeasyBase {
    class?: string;
    id?: string;
    name?: string;
}
/**
 * menus tree of the hub/box
 */
export declare class GetBoxMenus200ApplicationJSON extends SpeakeasyBase {
    menus?: GetBoxMenus200ApplicationJSONMenus[];
    spaceId?: string;
    spaceName?: string;
}
export declare class GetBoxMenusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menus tree of the hub/box
     */
    getBoxMenus200ApplicationJSONObject?: GetBoxMenus200ApplicationJSON;
}
