import { SpeakeasyBase } from "../../../internal/utils";
export declare class NHRecipeAvailability extends SpeakeasyBase {
    from?: string;
    note?: string;
}
export declare class NHRecipeBuy extends SpeakeasyBase {
    currency?: string;
    price?: number;
}
export declare class NHRecipeMaterials extends SpeakeasyBase {
    count?: number;
    name?: string;
}
/**
 * A JSON object describing the recipe.
 */
export declare class NHRecipe extends SpeakeasyBase {
    /**
     * Where the recipe may be obtained from. `from` is a brief description of the source; `note`, when provided, provides additional details.
     */
    availability?: NHRecipeAvailability[];
    /**
     * An array of prices, for when the recipe may be purchased with Bells, Nook Miles, etc. The majority of recipes cannot be bought (in which case this array will be empty).
     */
    buy?: NHRecipeBuy[];
    /**
     * Image of the item the recipe crafts. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * The list of materials required to craft the item.
     */
    materials?: NHRecipeMaterials[];
    /**
     * The name of the recipe.
     */
    name?: string;
    /**
     * How many recipes the player has to have learned to unlock this one.
     */
    recipesToUnlock?: number;
    /**
     * The number of Bells the sea creature can be sold to Nook's store for.
     */
    sell?: number;
    /**
     * The unique in-game ID of the recipe.
     */
    serialId?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
