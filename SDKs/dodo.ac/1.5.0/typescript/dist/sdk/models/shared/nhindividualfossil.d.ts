import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NHIndividualFossilColorsEnum {
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
 * A JSON object describing the individual fossil.
 */
export declare class NHIndividualFossil extends SpeakeasyBase {
    colors?: NHIndividualFossilColorsEnum[];
    /**
     * The name of the group that the fossil belongs to.
     */
    fossilGroup?: string;
    /**
     * The base value that the item provides to a player's Happy Home Academy score when placed in their home.
     */
    hhaBase?: number;
    /**
     * Image of the fossil's icon. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Whether or not the item can be interacted with.
     */
    interactable?: boolean;
    /**
     * The length of the fossil.
     */
    length?: number;
    /**
     * The name of the fossil.
     */
    name?: string;
    /**
     * The number of bells the item can be sold to Nook's store for.
     */
    sell?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
    /**
     * The width of the fossil.
     */
    width?: number;
}
