import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdPersonsMemberIdFoldersIdRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * memberId of the person
     */
    memberId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSONRightEnum {
    Write = "write",
    Read = "read",
    None = "none"
}
/**
 * An access to a folder
 */
export declare class GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    right?: GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSONRightEnum;
}
export declare class GetSpacesSpaceIdPersonsMemberIdFoldersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An access to a folder
     */
    getSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSONObject?: GetSpacesSpaceIdPersonsMemberIdFoldersId200ApplicationJSON;
}
