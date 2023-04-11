import { SpeakeasyBase } from "../../../internal/utils";
export declare class ColorHsl extends SpeakeasyBase {
    h?: number;
    l?: number;
    s?: number;
}
export declare class ColorLab extends SpeakeasyBase {
    a?: number;
    b?: number;
    l?: number;
}
export declare class ColorRgb extends SpeakeasyBase {
    b?: number;
    g?: number;
    r?: number;
}
export declare class Color extends SpeakeasyBase {
    distance?: number;
    hex?: string;
    hsl?: ColorHsl;
    lab?: ColorLab;
    luminance?: number;
    luminanceWCAG?: number;
    name?: string;
    requestedHex?: string;
    rgb?: ColorRgb;
    svg?: string;
    svgNamed?: string;
    swatchImg?: Record<string, any>;
}
