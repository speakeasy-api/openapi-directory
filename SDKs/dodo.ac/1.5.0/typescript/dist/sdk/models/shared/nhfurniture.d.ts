import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHFurnitureAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHFurnitureBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
/**
 * The category of item as shown in the player's inventory.
 */
export declare enum NHFurnitureCategoryEnum {
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    WallMounted = "Wall-mounted"
}
export declare enum NHFurnitureFunctionsEnum {
    Trash = "Trash",
    Toilet = "Toilet",
    Table = "Table",
    Storage = "Storage",
    Stereo = "Stereo",
    Seating = "Seating",
    Lighting = "Lighting",
    Instrument = "Instrument",
    Dresser = "Dresser",
    Bed = "Bed",
    Audio = "Audio"
}
/**
 * The season in which the item is lucky (or "All year" if lucky throughout the entire year). Items that are not lucky will have this field as an empty string.
 */
export declare enum NHFurnitureLuckySeasonEnum {
    Unknown = "",
    AllYear = "All year",
    Spring = "Spring",
    Summer = "Summer",
    Autumn = "Autumn",
    Winter = "Winter"
}
/**
 * The number of default patterns available to customize the item with, between 0 and 8. For items with customizable patterns, the player may also customize with patterns of their own.
 */
export declare enum NHFurniturePatternTotalEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8"
}
/**
 * The number of variations, between 0 and 8.
 */
export declare enum NHFurnitureVariationTotalEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8"
}
export declare enum NHFurnitureVariationsColorsEnum {
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
export declare class NHFurnitureVariations extends SpeakeasyBase {
    colors?: NHFurnitureVariationsColorsEnum[];
    imageUrl?: string;
    pattern?: string;
    variation?: string;
}
/**
 * A JSON object describing the furniture.
 */
export declare class NHFurniture extends SpeakeasyBase {
    /**
     * Where the furniture may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHFurnitureAvailability[];
    /**
     * An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..
     */
    buy?: NHFurnitureBuy[];
    /**
     * The category of item as shown in the player's inventory.
     */
    category?: NHFurnitureCategoryEnum;
    /**
     * If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.
     */
    customBodyPart?: string;
    /**
     * The item that needs to be consumed to customize this item. The vast majority are "Customization Kit", but a small selection of items will require a different item, such as items in the Spooky Series requireing pumpkins.
     */
    customKitType?: string;
    /**
     * The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.
     */
    customKits?: number;
    /**
     * If the item's pattern can be customized, this is the name of the furniture part that can have a pattern applied to it. For example, for the Baby Chair, the custom pattern part is "Cushion" as the cushion on the chair may have a pattern applied.
     */
    customPatternPart?: string;
    /**
     * Whether or not the item is customizable via a crafting table.
     */
    customizable?: boolean;
    /**
     * Whether this item may be placed on the exterior door of the player's house.
     */
    doorDecor?: boolean;
    /**
     * A list of functionalities (if any) that the item has. For example, furniture that items can be placed on topof will have "Table" as a function..
     */
    functions?: NHFurnitureFunctionsEnum[];
    /**
     * The number of lengthwise grid spaces this item takes up.
     */
    gridLength?: number;
    /**
     * The number of widthwise grid spaces this item takes up.
     */
    gridWidth?: number;
    /**
     * The height of the object. One in-game block is 10 units tall, while the player is 15.1324 units tall.
     */
    height?: number;
    /**
     * The base value that the item provides to a player's Happy Home Academy score when placed in their home.
     */
    hhaBase?: number;
    /**
     * The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.
     */
    hhaCategory?: string;
    /**
     * The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.
     */
    itemSeries?: string;
    /**
     * The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.
     */
    itemSet?: string;
    /**
     * Whether or not the item is lucky. Lucky items give a 777-point HHA bonus. Some items are only counted as lucky in certain seasons, as indicated by the `lucky_season` field.
     */
    lucky?: boolean;
    /**
     * The season in which the item is lucky (or "All year" if lucky throughout the entire year). Items that are not lucky will have this field as an empty string.
     */
    luckySeason?: NHFurnitureLuckySeasonEnum;
    /**
     * The name of the furniture.
     */
    name?: string;
    /**
     * Any additional miscellaneous information about the item, such as a name change from a past update.
     */
    notes?: string;
    /**
     * The number of default patterns available to customize the item with, between 0 and 8. For items with customizable patterns, the player may also customize with patterns of their own.
     */
    patternTotal?: NHFurniturePatternTotalEnum;
    /**
     * The number of Bells the item can be sold to Nook's store for.
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
     * The number of variations, between 0 and 8.
     */
    variationTotal?: NHFurnitureVariationTotalEnum;
    /**
     * An array of objects, each object representing a variation of the furniture. Furniture that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` or `pattern` fields will be empty strings. Furniture with multiple variations will have the `variation` and/or `pattern` fields defined depending on whether the furniture varies by body variety, pattern, or both.
     */
    variations?: NHFurnitureVariations[];
    /**
     * The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".
     */
    versionAdded?: string;
}
