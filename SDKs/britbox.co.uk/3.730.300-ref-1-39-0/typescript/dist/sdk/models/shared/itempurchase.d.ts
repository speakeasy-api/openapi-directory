import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ownership of the purchased item.
 */
export declare enum ItemPurchaseOwnershipEnum {
    Subscription = "Subscription",
    Free = "Free",
    Rent = "Rent",
    Own = "Own",
    None = "None"
}
/**
 * The resolution of the purchased item.
 */
export declare enum ItemPurchaseResolutionEnum {
    Sd = "SD",
    Hd720 = "HD-720",
    Hd1080 = "HD-1080",
    Hd4K = "HD-4K",
    External = "External",
    Unknown = "Unknown"
}
/**
 * The type of item purchased.
 */
export declare enum ItemPurchaseTypeEnum {
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
export declare class ItemPurchase extends SpeakeasyBase {
    /**
     * The identifier of the purchased item.
     */
    id: string;
    /**
     * The ownership of the purchased item.
     */
    ownership: ItemPurchaseOwnershipEnum;
    /**
     * The resolution of the purchased item.
     */
    resolution: ItemPurchaseResolutionEnum;
    /**
     * The title of the purchased item.
     */
    title: string;
    /**
     * The type of item purchased.
     */
    type: ItemPurchaseTypeEnum;
}
