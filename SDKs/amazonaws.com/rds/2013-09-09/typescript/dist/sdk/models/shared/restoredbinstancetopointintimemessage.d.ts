import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
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
    tags?: TagList[];
    targetDBInstanceIdentifier: string;
    useLatestRestorableTime?: boolean;
}
