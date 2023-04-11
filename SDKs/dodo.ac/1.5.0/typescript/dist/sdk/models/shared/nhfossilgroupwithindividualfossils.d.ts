import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NHFossilGroupWithIndividualFossilsFossilsColorsEnum {
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
export declare class NHFossilGroupWithIndividualFossilsFossils extends SpeakeasyBase {
    colors?: NHFossilGroupWithIndividualFossilsFossilsColorsEnum[];
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
export declare class NHFossilGroupWithIndividualFossilsMatched extends SpeakeasyBase {
    /**
     * The name of the fossil or fossil group that matched the given query.
     */
    name?: string;
    /**
     * If the query given was a fossil group, `group` would be returned. Otherwise, `individual` is returned.
     */
    type?: string;
}
/**
 * A JSON object describing the fossil group.
 */
export declare class NHFossilGroupWithIndividualFossils extends SpeakeasyBase {
    /**
     * A description of the fossil group.
     */
    description?: string;
    /**
     * An array of objects, each object representing a fossil that belongs to the given group.
     */
    fossils?: NHFossilGroupWithIndividualFossilsFossils[];
    matched?: NHFossilGroupWithIndividualFossilsMatched;
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
