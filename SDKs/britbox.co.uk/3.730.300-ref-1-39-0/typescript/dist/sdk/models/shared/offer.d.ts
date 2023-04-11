import { SpeakeasyBase } from "../../../internal/utils";
import { ExclusionRule } from "./exclusionrule";
export declare enum OfferAvailabilityEnum {
    Available = "Available",
    ComingSoon = "ComingSoon"
}
export declare enum OfferDeliveryTypeEnum {
    Stream = "Stream",
    Download = "Download",
    StreamOrDownload = "StreamOrDownload",
    ProgressiveDownload = "ProgressiveDownload",
    None = "None"
}
export declare enum OfferOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
export declare enum OfferResolutionEnum {
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
export declare class Offer extends SpeakeasyBase {
    availability: OfferAvailabilityEnum;
    /**
     * A map of custom fields defined by a curator for an offer.
     */
    customFields?: Record<string, any>;
    deliveryType: OfferDeliveryTypeEnum;
    endDate?: Date;
    /**
     * Any specific playback exclusion rules.
     */
    exclusionRules?: ExclusionRule[];
    id?: string;
    /**
     * The maximum number of allowed downloads.
     */
    maxDownloads?: number;
    /**
     * The maximum number of allowed plays.
     */
    maxPlays?: number;
    name?: string;
    ownership: OfferOwnershipEnum;
    /**
     * The length of time in minutes which the rental will last once played for the first time.
     */
    playPeriod?: number;
    price: number;
    /**
     * The length of time in minutes which the rental will last once purchased.
     */
    rentalPeriod?: number;
    resolution: OfferResolutionEnum;
    scopes: string[];
    startDate?: Date;
    /**
     * The code of the subscription this offer is offered under, if any.
     */
    subscriptionCode?: string;
}
