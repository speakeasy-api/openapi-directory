import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHItemAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHItemBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
/**
 * (WIP)
 */
export declare enum NHItemMaterialTypeEnum {
    Unknown = "",
    Bamboo = "Bamboo",
    Mushroom = "Mushroom",
    Trash = "Trash",
    Wood = "Wood",
    Ore = "Ore",
    Snowflake = "Snowflake",
    Tree = "Tree",
    Ornament = "Ornament",
    Fruit = "Fruit",
    Underwater = "Underwater",
    Other = "Other",
    Leaf = "Leaf",
    Shell = "Shell",
    Flower = "Flower",
    StarFragment = "Star Fragment",
    Feather = "Feather",
    Egg = "Egg",
    Plant = "Plant"
}
/**
 * (WIP)
 */
export declare enum NHItemPlantTypeEnum {
    Unknown = "",
    Pumpkin = "Pumpkin",
    Flower = "Flower",
    Bush = "Bush",
    Tree = "Tree"
}
/**
 * A JSON object describing the item.
 */
export declare class NHItem extends SpeakeasyBase {
    /**
     * Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHItemAvailability[];
    /**
     * An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..
     */
    buy?: NHItemBuy[];
    /**
     * Whether the item is edible or not.
     */
    edible?: boolean;
    /**
     * The base value that the item provides to a player's Happy Home Academy score when placed in their home.
     */
    hhaBase?: number;
    /**
     * Image of the interior. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Whether or not the item is a fence or not.
     */
    isFence?: boolean;
    /**
     * (WIP)
     */
    materialNameSort?: number;
    /**
     * (WIP)
     */
    materialSeasonality?: string;
    /**
     * (WIP)
     */
    materialSeasonalitySort?: number;
    /**
     * (WIP)
     */
    materialSort?: number;
    /**
     * (WIP)
     */
    materialType?: NHItemMaterialTypeEnum;
    /**
     * The name of the item.
     */
    name?: string;
    /**
     * Any additional miscellaneous information about the item, such as a name change from a past update.
     */
    notes?: string;
    /**
     * (WIP)
     */
    plantType?: NHItemPlantTypeEnum;
    /**
     * The number of bells the item can be sold to Nook's store for.
     */
    sell?: number;
    /**
     * How much the item can stack up to in a single inventory slot.
     */
    stack?: number;
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
