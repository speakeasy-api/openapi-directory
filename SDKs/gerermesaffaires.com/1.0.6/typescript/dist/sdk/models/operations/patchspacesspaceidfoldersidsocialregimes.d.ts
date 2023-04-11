import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyPeriodicityEnum {
    Monthly = "monthly",
    Quarterly = "quarterly",
    HalfYearly = "half-yearly",
    Annual = "annual",
    Null = "null"
}
export declare enum PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyTypeEnum {
    Mandatory = "mandatory",
    Optional = "optional",
    Null = "null"
}
/**
 * Social Regime to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyLevelEnum;
    periodicity?: PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyPeriodicityEnum;
    start?: string;
    type?: PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBodyTypeEnum;
}
export declare class PatchSpacesSpaceIdFoldersIdSocialRegimesRequest extends SpeakeasyBase {
    /**
     * Social Regime to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdSocialRegimesRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdSocialRegimesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
