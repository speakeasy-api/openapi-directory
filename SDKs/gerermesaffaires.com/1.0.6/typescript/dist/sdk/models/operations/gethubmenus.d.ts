import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHubMenus200ApplicationJSONMenus extends SpeakeasyBase {
    class?: string;
    id?: string;
    name?: string;
}
/**
 * menus tree of the hub/box
 */
export declare class GetHubMenus200ApplicationJSON extends SpeakeasyBase {
    menus?: GetHubMenus200ApplicationJSONMenus[];
    spaceId?: string;
    spaceName?: string;
}
export declare class GetHubMenusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menus tree of the hub/box
     */
    getHubMenus200ApplicationJSONObject?: GetHubMenus200ApplicationJSON;
}
