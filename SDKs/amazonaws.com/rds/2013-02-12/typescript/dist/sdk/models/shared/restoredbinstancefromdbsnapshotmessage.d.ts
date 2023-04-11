import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreDBInstanceFromDBSnapshotMessage extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbName?: string;
    dbSnapshotIdentifier: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
}
