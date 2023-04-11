import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DeleteClusterMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    finalClusterSnapshotIdentifier?: string;
    finalClusterSnapshotRetentionPeriod?: number;
    skipFinalClusterSnapshot?: boolean;
}
