import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHInteriorAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHInteriorBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
/**
 * The category of item as shown in the player's inventory.
 */
export declare enum NHInteriorCategoryEnum {
    Floors = "Floors",
    Wallpaper = "Wallpaper",
    Rugs = "Rugs"
}
/**
 * (WIP)
 */
export declare enum NHInteriorColorsEnum {
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
/**
 * A JSON object describing the interior item.
 */
export declare class NHInterior extends SpeakeasyBase {
    /**
     * Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHInteriorAvailability[];
    /**
     * An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..
     */
    buy?: NHInteriorBuy[];
    /**
     * The category of item as shown in the player's inventory.
     */
    category?: NHInteriorCategoryEnum;
    /**
     * (WIP)
     */
    colors?: NHInteriorColorsEnum;
    /**
     * The number of lengthwise grid spaces this item takes up.
     */
    gridLength?: number;
    /**
     * The number of widthwise grid spaces this item takes up.
     */
    gridWidth?: number;
    /**
     * The base value that the item provides to a player's Happy Home Academy score when placed in their home.
     */
    hhaBase?: number;
    /**
     * The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.
     */
    hhaCategory?: string;
    /**
     * Image of the interior. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.
     */
    itemSeries?: string;
    /**
     * The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.
     */
    itemSet?: string;
    /**
     * The name of the interior.
     */
    name?: string;
    /**
     * Any additional miscellaneous information about the item, such as a name change from a past update.
     */
    notes?: string;
    /**
     * The number of Bells the interior can be sold to Nook's store for.
     */
    sell?: number;
    /**
     * The tag of an item, if any, which denotes a specific use or relation to an event. Tags are determined by Nintendo. Examples include "Chair", "Musical Instrument", and "Mario". If the item does not have a tag, this will be an empty string.
     */
    tag?: string;
    /**
     * A list of [themes](https://nookipedia.com/wiki/Theme_(furniture)) (if any) that the item belongs to.
     */
    themes?: string[];
    /**
     * Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.
     */
    unlocked?: boolean;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
    /**
     * The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".
     */
    versionAdded?: string;
}
