import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdLegalEntitiesIdSocialRegimesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyPeriodicityEnum {
    Monthly = "monthly",
    Quarterly = "quarterly",
    HalfYearly = "half-yearly",
    Annual = "annual",
    Null = "null"
}
export declare enum PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyTypeEnum {
    Mandatory = "mandatory",
    Optional = "optional",
    Null = "null"
}
/**
 * SocialRegime to add (except name, class and archivaldate)
 */
export declare class PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyLevelEnum;
    periodicity?: PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyPeriodicityEnum;
    start?: string;
    type?: PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBodyTypeEnum;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequest extends SpeakeasyBase {
    /**
     * SocialRegime to add (except name, class and archivaldate)
     */
    requestBody: PostSpacesSpaceIdLegalEntitiesIdSocialRegimesRequestBody;
    /**
     * Id of the legal entity or memberId
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
export declare class PostSpacesSpaceIdLegalEntitiesIdSocialRegimes201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdLegalEntitiesIdSocialRegimesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of folder created
     */
    postSpacesSpaceIdLegalEntitiesIdSocialRegimes201ApplicationJSONObject?: PostSpacesSpaceIdLegalEntitiesIdSocialRegimes201ApplicationJSON;
}
