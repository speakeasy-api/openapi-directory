import { SpeakeasyBase } from "../../../internal/utils";
import { UserSettingsSummary } from "./usersettingssummary";
/**
 * Success
 */
export declare class ListUserSettingsResponse extends SpeakeasyBase {
    nextToken?: string;
    userSettings?: UserSettingsSummary[];
}
