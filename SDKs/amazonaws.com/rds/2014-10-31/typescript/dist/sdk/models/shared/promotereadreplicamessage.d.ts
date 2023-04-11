import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class PromoteReadReplicaMessage extends SpeakeasyBase {
    backupRetentionPeriod?: number;
    dbInstanceIdentifier: string;
    preferredBackupWindow?: string;
}
