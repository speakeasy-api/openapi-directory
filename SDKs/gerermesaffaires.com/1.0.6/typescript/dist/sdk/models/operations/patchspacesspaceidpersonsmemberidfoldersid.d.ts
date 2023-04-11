import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBodyRightEnum {
    Write = "write",
    Read = "read",
    None = "none"
}
/**
 * Access to modify
 */
export declare class PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBody extends SpeakeasyBase {
    about?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBodyLevelEnum;
    right?: PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBodyRightEnum;
}
export declare class PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequest extends SpeakeasyBase {
    /**
     * Access to modify
     */
    requestBody: PatchSpacesSpaceIdPersonsMemberIdFoldersIdRequestBody;
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
export declare class PatchSpacesSpaceIdPersonsMemberIdFoldersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
