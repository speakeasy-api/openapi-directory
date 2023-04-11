import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Folder to modify (except Name, Class,ModificationDate and ArchivalDate)
 */
export declare class PatchSpacesSpaceIdFoldersIdRequestBody extends SpeakeasyBase {
    about?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdRequestBodyLevelEnum;
}
export declare class PatchSpacesSpaceIdFoldersIdRequest extends SpeakeasyBase {
    /**
     * Folder to modify (except Name, Class,ModificationDate and ArchivalDate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
