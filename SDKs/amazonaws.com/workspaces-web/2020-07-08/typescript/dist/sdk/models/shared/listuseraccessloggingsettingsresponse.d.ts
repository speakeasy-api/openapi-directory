import { SpeakeasyBase } from "../../../internal/utils";
import { UserAccessLoggingSettingsSummary } from "./useraccessloggingsettingssummary";
/**
 * Success
 */
export declare class ListUserAccessLoggingSettingsResponse extends SpeakeasyBase {
    nextToken?: string;
    userAccessLoggingSettings?: UserAccessLoggingSettingsSummary[];
}
