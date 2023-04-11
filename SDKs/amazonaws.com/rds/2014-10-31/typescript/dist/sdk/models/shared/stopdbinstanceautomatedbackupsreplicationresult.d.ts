import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceAutomatedBackup } from "./dbinstanceautomatedbackup";
/**
 * Success
 */
export declare class StopDBInstanceAutomatedBackupsReplicationResult extends SpeakeasyBase {
    /**
     * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
     */
    dbInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}
