import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdCommonFoldersIdRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Folder to modify
 */
export declare class PatchSpacesSpaceIdCommonFoldersIdRequestBody extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdCommonFoldersIdRequestBodyLevelEnum;
    name?: string;
}
export declare class PatchSpacesSpaceIdCommonFoldersIdRequest extends SpeakeasyBase {
    /**
     * Folder to modify
     */
    requestBody: PatchSpacesSpaceIdCommonFoldersIdRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdCommonFoldersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
