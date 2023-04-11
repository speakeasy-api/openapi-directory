import { SpeakeasyBase } from "../../../internal/utils";
import { BrowserSettingsSummary } from "./browsersettingssummary";
/**
 * Success
 */
export declare class ListBrowserSettingsResponse extends SpeakeasyBase {
    browserSettings?: BrowserSettingsSummary[];
    nextToken?: string;
}
