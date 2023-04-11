import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeColor } from "./themecolor";
/**
 * The type of theme.
 */
export declare enum ThemeTypeEnum {
    Background = "Background",
    Text = "Text",
    Custom = "Custom"
}
export declare class Theme extends SpeakeasyBase {
    /**
     * The list of colors defined for the theme.
     */
    colors: ThemeColor[];
    /**
     * The type of theme.
     */
    type: ThemeTypeEnum;
}
