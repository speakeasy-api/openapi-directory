import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHubMenusAll200ApplicationJSONBusinessGroup extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class GetHubMenusAll200ApplicationJSONMenus extends SpeakeasyBase {
    class?: string;
    id?: string;
    name?: string;
}
/**
 * menus tree of the hub
 */
export declare class GetHubMenusAll200ApplicationJSON extends SpeakeasyBase {
    businessGroup?: GetHubMenusAll200ApplicationJSONBusinessGroup;
    menus?: GetHubMenusAll200ApplicationJSONMenus[];
    spaceId?: string;
    spaceName?: string;
}
export declare class GetHubMenusAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menus tree of the hub
     */
    getHubMenusAll200ApplicationJSONObject?: GetHubMenusAll200ApplicationJSON;
}
