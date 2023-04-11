import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDBInstanceMessage extends SpeakeasyBase {
    allocatedStorage: number;
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    backupRetentionPeriod?: number;
    characterSetName?: string;
    dbInstanceClass: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbParameterGroupName?: string;
    dbSecurityGroups?: string[];
    dbSubnetGroupName?: string;
    engine: string;
    engineVersion?: string;
    iops?: number;
    licenseModel?: string;
    masterUserPassword: string;
    masterUsername: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    publiclyAccessible?: boolean;
    vpcSecurityGroupIds?: string[];
}
