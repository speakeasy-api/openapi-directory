import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * An enumeration.
 */
export declare enum TextFieldFontEnum {
    Courier = "courier",
    Helvetica = "helvetica",
    TimesRoman = "times_roman"
}
/**
 * An enumeration.
 */
export declare enum TextFieldHorizontalAlignEnum {
    L = "L",
    C = "C",
    R = "R"
}
export declare enum TextFieldTypeEnum {
    Text = "text"
}
/**
 * An enumeration.
 */
export declare enum TextFieldVerticalAlignEnum {
    T = "T",
    C = "C",
    B = "B"
}
export declare class TextField extends SpeakeasyBase {
    bbox: BoundingBox;
    cellCount?: number;
    cellOffset?: number;
    cells?: boolean;
    color?: string;
    font?: TextFieldFontEnum;
    fontSize?: number;
    hAlign?: TextFieldHorizontalAlignEnum;
    name: string;
    page: number;
    required?: boolean;
    type: TextFieldTypeEnum;
    vAlign?: TextFieldVerticalAlignEnum;
}
