import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdCommonFoldersSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdCommonFoldersRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Common Folder to add
 */
export declare class PostSpacesSpaceIdFoldersIdCommonFoldersRequestBody extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdFoldersIdCommonFoldersRequestBodyLevelEnum;
    name: string;
    rights?: boolean;
}
export declare class PostSpacesSpaceIdFoldersIdCommonFoldersRequest extends SpeakeasyBase {
    /**
     * Common Folder to add
     */
    requestBody: PostSpacesSpaceIdFoldersIdCommonFoldersRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of folder created
 */
export declare class PostSpacesSpaceIdFoldersIdCommonFolders201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdCommonFoldersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdFoldersIdCommonFolders201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdCommonFolders201ApplicationJSON;
}
