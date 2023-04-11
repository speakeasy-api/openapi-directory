import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMenus200ApplicationJSONSubMenus extends SpeakeasyBase {
    label?: string;
    menuId?: string;
    pictogram?: string;
}
/**
 * menu tree of the hub/box
 */
export declare class GetMenus200ApplicationJSON extends SpeakeasyBase {
    label?: string;
    menuId?: string;
    pictogram?: string;
    subMenus?: GetMenus200ApplicationJSONSubMenus[];
}
export declare class GetMenusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menu tree of the hub/box
     */
    getMenus200ApplicationJSONObject?: GetMenus200ApplicationJSON;
}
