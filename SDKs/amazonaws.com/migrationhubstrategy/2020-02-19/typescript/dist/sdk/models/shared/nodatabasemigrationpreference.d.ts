import { SpeakeasyBase } from "../../../internal/utils";
import { TargetDatabaseEngineEnum } from "./targetdatabaseengineenum";
/**
 *  The object containing details about database migration preferences, when you have no particular preference.
 */
export declare class NoDatabaseMigrationPreference extends SpeakeasyBase {
    targetDatabaseEngine: TargetDatabaseEngineEnum[];
}
