import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { ExclusionRule } from "./exclusionrule";
export declare enum EntitlementDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}
/**
 * The type of item this entitlement is for.
 */
export declare enum EntitlementItemTypeEnum {
    Movie = "movie",
    Show = "show",
    Season = "season",
    Episode = "episode",
    Program = "program",
    Link = "link",
    Trailer = "trailer",
    Channel = "channel",
    CustomAsset = "customAsset"
}
export declare enum EntitlementOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
export declare enum EntitlementResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
/**
 * The base type for both Offer and Entitlement.
 */
export declare class Entitlement extends SpeakeasyBase {
    /**
     * The date of activation. If no date is defined the entitlement has not be activated.
     */
    activationDate?: Date;
    classification?: ClassificationSummary;
    /**
     * The date the entitlement was created.
     */
    creationDate?: Date;
    deliveryType: EntitlementDeliveryTypeEnum;
    /**
     * Any specific playback exclusion rules.
     */
    exclusionRules?: ExclusionRule[];
    /**
     * The date the entitlement expires.
     */
    expirationDate?: Date;
    /**
     * The id of the item this entitlement is for.
     */
    itemId?: string;
    /**
     * The type of item this entitlement is for.
     */
    itemType?: EntitlementItemTypeEnum;
    /**
     * The maximum number of allowed downloads.
     */
    maxDownloads?: number;
    /**
     * The maximum number of allowed plays.
     */
    maxPlays?: number;
    /**
     * The duration of the entitled media.
     */
    mediaDuration?: number;
    ownership: EntitlementOwnershipEnum;
    /**
     * The id of the plan this entitlement is for.
     */
    planId?: string;
    /**
     * How many times the media has been played.
     */
    playCount?: number;
    /**
     * The length of time in minutes which the rental will last once played for the first time.
     */
    playPeriod?: number;
    /**
     * How many more downloads of this media are available.
     */
    remainingDownloads?: number;
    /**
     * The length of time in minutes which the rental will last once purchased.
     */
    rentalPeriod?: number;
    resolution: EntitlementResolutionEnum;
    scopes: string[];
}
