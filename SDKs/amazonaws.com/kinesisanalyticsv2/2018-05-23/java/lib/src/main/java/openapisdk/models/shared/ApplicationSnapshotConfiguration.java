package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApplicationSnapshotConfiguration
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
public class ApplicationSnapshotConfiguration {
    @JsonProperty("SnapshotsEnabled")
    public Boolean snapshotsEnabled;
    public ApplicationSnapshotConfiguration withSnapshotsEnabled(Boolean snapshotsEnabled) {
        this.snapshotsEnabled = snapshotsEnabled;
        return this;
    }
}