import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHToolAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHToolBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
export declare class NHToolVariations extends SpeakeasyBase {
    imageUrl?: string;
    variation?: string;
}
/**
 * A JSON object describing the tool.
 */
export declare class NHTool extends SpeakeasyBase {
    /**
     * Where the tool may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHToolAvailability[];
    /**
     * An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..
     */
    buy?: NHToolBuy[];
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
     * The base value that the item provides to a player's Happy Home Academy score when placed in their home.
     */
    hhaBase?: number;
    /**
     * The name of the tool.
     */
    name?: string;
    /**
     * Any additional miscellaneous information about the item, such as a name change from a past update.
     */
    notes?: string;
    /**
     * The number of bells the tool can be sold to the store for.
     */
    sell?: number;
    /**
     * Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.
     */
    unlocked?: boolean;
    /**
     * Link the the respective Nookipedia article.
     */
    url?: string;
    /**
     * How many times the tool can be used before breaking.
     */
    uses?: number;
    /**
     * An array of objects, each object representing a variation of the tool. Tools that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Tools with multiple variations will have the `variation` fields defined with the name of each variation.
     */
    variations?: NHToolVariations[];
    /**
     * The version of *New Horizons* that the item was added. Items that were included at the game's launch have version "1.0.0".
     */
    versionAdded?: string;
}
