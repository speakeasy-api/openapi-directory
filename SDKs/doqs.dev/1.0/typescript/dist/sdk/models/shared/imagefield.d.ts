import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * An enumeration.
 */
export declare enum ImageFieldImageAnchorEnum {
    Nw = "nw",
    N = "n",
    Ne = "ne",
    W = "w",
    C = "c",
    E = "e",
    Sw = "sw",
    S = "s"
}
export declare enum ImageFieldTypeEnum {
    Image = "image"
}
export declare class ImageField extends SpeakeasyBase {
    anchor?: ImageFieldImageAnchorEnum;
    bbox: BoundingBox;
    name: string;
    page: number;
    required?: boolean;
    type?: ImageFieldTypeEnum;
}
