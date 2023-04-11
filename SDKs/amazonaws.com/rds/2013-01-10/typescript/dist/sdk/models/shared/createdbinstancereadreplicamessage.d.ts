import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDBInstanceReadReplicaMessage extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    iops?: number;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    sourceDBInstanceIdentifier: string;
}
