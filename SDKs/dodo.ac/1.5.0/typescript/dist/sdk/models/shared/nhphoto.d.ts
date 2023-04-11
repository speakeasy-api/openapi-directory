import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHPhotoAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHPhotoBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
/**
 * The category of item as shown in the player's inventory.
 */
export declare enum NHPhotoCategoryEnum {
    Photos = "Photos",
    Posters = "Posters"
}
export declare enum NHPhotoVariationsColorsEnum {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
export declare class NHPhotoVariations extends SpeakeasyBase {
    colors?: NHPhotoVariationsColorsEnum[];
    imageUrl?: string;
    variation?: string;
}
/**
 * A JSON object describing the photo or poster.
 */
export declare class NHPhoto extends SpeakeasyBase {
    /**
     * Where the photo may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHPhotoAvailability[];
    /**
     * An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..
     */
    buy?: NHPhotoBuy[];
    /**
     * The category of item as shown in the player's inventory.
     */
    category?: NHPhotoCategoryEnum;
    /**
     * If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.
     */
    customBodyPart?: string;
    /**
     * The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.
     */
    customKits?: number;
    /**
     * Whether or not the item is customizable via a crafting table.
     */
    customizable?: boolean;
    /**
     * The number of lengthwise grid spaces this item takes up.
     */
    gridLength?: number;
    /**
     * The number of widthwise grid spaces this item takes up.
     */
    gridWidth?: number;
    /**
     * Whether or not the item can be interacted with. This field is true for all photos and false for all posters.
     */
    interactable?: boolean;
    /**
     * The name of the photo.
     */
    name?: string;
    /**
     * The number of Bells the photo can be sold to the store for.
     */
    sell?: number;
    /**
     * Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.
     */
    unlocked?: boolean;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
    /**
     * An array of objects, each object representing a variation of the photo or poster. Items that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Items with multiple variations will have the `variation` fields defined with the name of each variation.
     */
    variations?: NHPhotoVariations[];
    /**
     * The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".
     */
    versionAdded?: string;
}
