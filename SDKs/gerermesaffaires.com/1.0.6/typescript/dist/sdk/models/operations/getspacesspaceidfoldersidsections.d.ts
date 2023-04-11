import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdSectionsRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersIdSections200ApplicationJSONStateEnum {
    Folded = "folded",
    Unfolded = "unfolded",
    Hidden = "hidden"
}
export declare class GetSpacesSpaceIdFoldersIdSections200ApplicationJSON extends SpeakeasyBase {
    keywords?: string[];
    name?: string;
    state?: GetSpacesSpaceIdFoldersIdSections200ApplicationJSONStateEnum;
    type?: string;
}
export declare class GetSpacesSpaceIdFoldersIdSectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of sections of the folder
     */
    getSpacesSpaceIdFoldersIdSections200ApplicationJSONAnies?: GetSpacesSpaceIdFoldersIdSections200ApplicationJSON[];
}
