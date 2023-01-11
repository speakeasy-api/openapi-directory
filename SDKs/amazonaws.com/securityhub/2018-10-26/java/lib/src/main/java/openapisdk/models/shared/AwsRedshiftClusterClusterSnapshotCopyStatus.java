package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRedshiftClusterClusterSnapshotCopyStatus
 * Information about a cross-Region snapshot copy.
**/
public class AwsRedshiftClusterClusterSnapshotCopyStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationRegion")
    public String destinationRegion;
    public AwsRedshiftClusterClusterSnapshotCopyStatus withDestinationRegion(String destinationRegion) {
        this.destinationRegion = destinationRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManualSnapshotRetentionPeriod")
    public Long manualSnapshotRetentionPeriod;
    public AwsRedshiftClusterClusterSnapshotCopyStatus withManualSnapshotRetentionPeriod(Long manualSnapshotRetentionPeriod) {
        this.manualSnapshotRetentionPeriod = manualSnapshotRetentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RetentionPeriod")
    public Long retentionPeriod;
    public AwsRedshiftClusterClusterSnapshotCopyStatus withRetentionPeriod(Long retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotCopyGrantName")
    public String snapshotCopyGrantName;
    public AwsRedshiftClusterClusterSnapshotCopyStatus withSnapshotCopyGrantName(String snapshotCopyGrantName) {
        this.snapshotCopyGrantName = snapshotCopyGrantName;
        return this;
    }
}