import { SpeakeasyBase } from "../../../internal/utils";
import { DBInstanceAutomatedBackupsReplicationList } from "./dbinstanceautomatedbackupsreplicationlist";
import { RestoreWindow } from "./restorewindow";
/**
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
 */
export declare class DBInstanceAutomatedBackupList extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    backupTarget?: string;
    dbInstanceArn?: string;
    dbInstanceAutomatedBackupsArn?: string;
    dbInstanceAutomatedBackupsReplications?: DBInstanceAutomatedBackupsReplicationList[];
    dbInstanceIdentifier?: string;
    dbiResourceId?: string;
    encrypted?: boolean;
    engine?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    instanceCreateTime?: Date;
    iops?: number;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    optionGroupName?: string;
    port?: number;
    region?: string;
    restoreWindow?: RestoreWindow;
    status?: string;
    storageThroughput?: number;
    storageType?: string;
    tdeCredentialArn?: string;
    timezone?: string;
    vpcId?: string;
}
