import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeValues } from "./themevalues";
/**
 * A theme is a collection of style settings that apply globally to the components associated with an Amplify application.
 */
export declare class Theme extends SpeakeasyBase {
    appId: string;
    createdAt: Date;
    environmentName: string;
    id: string;
    modifiedAt?: Date;
    name: string;
    overrides?: ThemeValues[];
    tags?: Record<string, string>;
    values: ThemeValues[];
}
