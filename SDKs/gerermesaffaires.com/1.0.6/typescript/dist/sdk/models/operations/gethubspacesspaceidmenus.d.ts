import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHubSpacesSpaceIdMenusRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetHubSpacesSpaceIdMenus200ApplicationJSONFolders extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * menus of the hub
 */
export declare class GetHubSpacesSpaceIdMenus200ApplicationJSON extends SpeakeasyBase {
    folders?: GetHubSpacesSpaceIdMenus200ApplicationJSONFolders[];
    workbooks?: string[];
}
export declare class GetHubSpacesSpaceIdMenusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * menus of the hub
     */
    getHubSpacesSpaceIdMenus200ApplicationJSONObject?: GetHubSpacesSpaceIdMenus200ApplicationJSON;
}
