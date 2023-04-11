import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyDBInstanceMessage extends SpeakeasyBase {
    allocatedStorage?: number;
    allowMajorVersionUpgrade?: boolean;
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    backupRetentionPeriod?: number;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    engineVersion?: string;
    iops?: number;
    masterUserPassword?: string;
    multiAZ?: boolean;
    newDBInstanceIdentifier?: string;
    optionGroupName?: string;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    storageType?: string;
    tdeCredentialArn?: string;
    tdeCredentialPassword?: string;
    vpcSecurityGroupIds?: string[];
}
