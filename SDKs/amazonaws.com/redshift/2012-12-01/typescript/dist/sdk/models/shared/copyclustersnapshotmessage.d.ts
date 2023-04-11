import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class CopyClusterSnapshotMessage extends SpeakeasyBase {
    manualSnapshotRetentionPeriod?: number;
    sourceSnapshotClusterIdentifier?: string;
    sourceSnapshotIdentifier: string;
    targetSnapshotIdentifier: string;
}
