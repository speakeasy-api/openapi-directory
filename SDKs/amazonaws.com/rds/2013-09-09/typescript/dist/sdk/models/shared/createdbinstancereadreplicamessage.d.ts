import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateDBInstanceReadReplicaMessage extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    dbSubnetGroupName?: string;
    iops?: number;
    optionGroupName?: string;
    port?: number;
    publiclyAccessible?: boolean;
    sourceDBInstanceIdentifier: string;
    tags?: TagList[];
}
