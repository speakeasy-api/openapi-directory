import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * An enumeration.
 */
export declare enum DateFieldFontEnum {
    Courier = "courier",
    Helvetica = "helvetica",
    TimesRoman = "times_roman"
}
/**
 * An enumeration.
 */
export declare enum DateFieldHorizontalAlignEnum {
    L = "L",
    C = "C",
    R = "R"
}
export declare enum DateFieldTypeEnum {
    Date = "date"
}
/**
 * An enumeration.
 */
export declare enum DateFieldVerticalAlignEnum {
    T = "T",
    C = "C",
    B = "B"
}
export declare class DateField extends SpeakeasyBase {
    bbox: BoundingBox;
    cellCount?: number;
    cellOffset?: number;
    cells?: boolean;
    color?: string;
    font?: DateFieldFontEnum;
    fontSize?: number;
    format: string;
    hAlign?: DateFieldHorizontalAlignEnum;
    locale?: string;
    name: string;
    page: number;
    required?: boolean;
    type: DateFieldTypeEnum;
    vAlign?: DateFieldVerticalAlignEnum;
}
