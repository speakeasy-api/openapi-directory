import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class ModifySnapshotCopyRetentionPeriodMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    manual?: boolean;
    retentionPeriod: number;
}
