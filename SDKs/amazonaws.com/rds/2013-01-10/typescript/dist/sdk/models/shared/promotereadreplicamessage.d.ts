import { SpeakeasyBase } from "../../../internal/utils";
export declare class PromoteReadReplicaMessage extends SpeakeasyBase {
    backupRetentionPeriod?: number;
    dbInstanceIdentifier: string;
    preferredBackupWindow?: string;
}
