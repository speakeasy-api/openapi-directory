import { SpeakeasyBase } from "../../../internal/utils";
import { ThemeSummary } from "./themesummary";
/**
 * Success
 */
export declare class ListThemesResponse extends SpeakeasyBase {
    entities: ThemeSummary[];
    nextToken?: string;
}
