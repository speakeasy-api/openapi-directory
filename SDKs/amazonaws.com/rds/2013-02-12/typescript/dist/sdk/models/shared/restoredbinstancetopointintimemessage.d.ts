import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreDBInstanceToPointInTimeMessage extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbName?: string;
    dbSubnetGroupName?: string;
    engine?: string;
    iops?: number;
    licenseModel?: string;
    multiAZ?: boolean;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    restoreTime?: Date;
    sourceDBInstanceIdentifier: string;
    targetDBInstanceIdentifier: string;
    useLatestRestorableTime?: boolean;
}
