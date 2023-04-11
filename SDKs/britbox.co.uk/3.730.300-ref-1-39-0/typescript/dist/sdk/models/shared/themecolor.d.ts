import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThemeColor extends SpeakeasyBase {
    /**
     * The name of the theme color.
     */
    name: string;
    /**
     * The opacity of the theme color from 0 to 1.
     *
     * @remarks
     *
     * When omitted, no opacity level is to be applied to the color, or in other words we
     * assume the color has an opacity of 1
     *
     */
    opacity?: number;
    /**
     * The hex value of the theme color.
     */
    value: string;
}
