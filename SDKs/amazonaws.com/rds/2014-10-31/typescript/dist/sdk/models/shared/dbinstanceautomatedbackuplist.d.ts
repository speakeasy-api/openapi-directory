import { SpeakeasyBase } from "../../../internal/utils";
import { DbInstanceAutomatedBackupsReplicationList } from "./dbinstanceautomatedbackupsreplicationlist";
import { RestoreWindow } from "./restorewindow";
/**
 * An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance.
**/
export declare class DbInstanceAutomatedBackupList extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    dbInstanceArn?: string;
    dbInstanceAutomatedBackupsArn?: string;
    dbInstanceAutomatedBackupsReplications?: DbInstanceAutomatedBackupsReplicationList[];
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
    storageType?: string;
    tdeCredentialArn?: string;
    timezone?: string;
    vpcId?: string;
}
