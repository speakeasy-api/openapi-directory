import { SpeakeasyBase } from "../../../internal/utils";
import { SettingEntry } from "./settingentry";
/**
 * Success
 */
export declare class DescribeSettingsResult extends SpeakeasyBase {
    directoryId?: string;
    nextToken?: string;
    settingEntries?: SettingEntry[];
}
