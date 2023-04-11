import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class EnableSnapshotCopyMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    destinationRegion: string;
    manualSnapshotRetentionPeriod?: number;
    retentionPeriod?: number;
    snapshotCopyGrantName?: string;
}
