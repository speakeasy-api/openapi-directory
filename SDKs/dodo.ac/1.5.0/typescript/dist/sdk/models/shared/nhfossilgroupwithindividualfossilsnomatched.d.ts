import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NHFossilGroupWithIndividualFossilsNoMatchedFossilsColorsEnum {
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
export declare class NHFossilGroupWithIndividualFossilsNoMatchedFossils extends SpeakeasyBase {
    colors?: NHFossilGroupWithIndividualFossilsNoMatchedFossilsColorsEnum[];
    fossilGroup?: string;
    hhaBase?: number;
    imageUrl?: string;
    interactable?: boolean;
    length?: number;
    name?: string;
    sell?: number;
    url?: string;
    width?: number;
}
export declare class NHFossilGroupWithIndividualFossilsNoMatched extends SpeakeasyBase {
    /**
     * A description of the fossil group.
     */
    description?: string;
    /**
     * An array of objects, each object representing a fossil that belongs to the given group.
     */
    fossils?: NHFossilGroupWithIndividualFossilsNoMatchedFossils[];
    /**
     * The name of the fossil group.
     */
    name?: string;
    /**
     * The room where the fossil group can be found in the museum's fossil section.
     */
    room?: number;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
