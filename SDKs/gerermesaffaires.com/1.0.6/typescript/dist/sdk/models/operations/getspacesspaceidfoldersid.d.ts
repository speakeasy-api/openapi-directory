import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdFoldersId200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A folder
 */
export declare class GetSpacesSpaceIdFoldersId200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesSpaceIdFoldersId200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
}
export declare class GetSpacesSpaceIdFoldersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A folder
     */
    getSpacesSpaceIdFoldersId200ApplicationJSONObject?: GetSpacesSpaceIdFoldersId200ApplicationJSON;
}
