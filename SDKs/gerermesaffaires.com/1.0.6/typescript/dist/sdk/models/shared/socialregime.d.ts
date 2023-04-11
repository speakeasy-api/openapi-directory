import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SocialRegimeLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare enum SocialRegimePeriodicityEnum {
    Monthly = "monthly",
    Quarterly = "quarterly",
    HalfYearly = "half-yearly",
    Annual = "annual",
    Null = "null"
}
export declare enum SocialRegimeTypeEnum {
    Mandatory = "mandatory",
    Optional = "optional",
    Null = "null"
}
/**
 * A social regime folder
 */
export declare class SocialRegime extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: SocialRegimeLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    periodicity?: SocialRegimePeriodicityEnum;
    start?: string;
    type?: SocialRegimeTypeEnum;
}
