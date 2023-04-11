import { SpeakeasyBase } from "../../../internal/utils";
import { Heterogeneous } from "./heterogeneous";
import { Homogeneous } from "./homogeneous";
import { NoDatabaseMigrationPreference } from "./nodatabasemigrationpreference";
/**
 *  Preferences for migrating a database to AWS.
 */
export declare class DatabaseMigrationPreference extends SpeakeasyBase {
    heterogeneous?: Heterogeneous;
    homogeneous?: Homogeneous;
    noPreference?: NoDatabaseMigrationPreference;
}
