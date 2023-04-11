import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeValues } from "./themevalues";
/**
 * Describes the configuration of a theme's properties.
 */
export declare class ThemeValue extends SpeakeasyBase {
    children?: ThemeValues[];
    value?: string;
}
