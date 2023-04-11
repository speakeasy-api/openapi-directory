import { SpeakeasyBase } from "../../../internal/utils";
/**
 * You can configure Amazon Redshift to copy snapshots for a cluster to another Amazon Web Services Region. This parameter provides information about a cross-Region snapshot copy.
 */
export declare class AwsRedshiftClusterClusterSnapshotCopyStatus extends SpeakeasyBase {
    destinationRegion?: string;
    manualSnapshotRetentionPeriod?: number;
    retentionPeriod?: number;
    snapshotCopyGrantName?: string;
}
