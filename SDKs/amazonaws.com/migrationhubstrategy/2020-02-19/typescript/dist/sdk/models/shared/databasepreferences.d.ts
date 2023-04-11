import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseManagementPreferenceEnum } from "./databasemanagementpreferenceenum";
import { DatabaseMigrationPreference } from "./databasemigrationpreference";
/**
 *  Preferences on managing your databases on AWS.
 */
export declare class DatabasePreferences extends SpeakeasyBase {
    databaseManagementPreference?: DatabaseManagementPreferenceEnum;
    databaseMigrationPreference?: DatabaseMigrationPreference;
}
