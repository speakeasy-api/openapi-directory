package openapisdk.models.shared;



/**
 * DescribeSnapshotsListMessage
 * Represents the output of a <code>DescribeSnapshots</code> operation.
**/
public class DescribeSnapshotsListMessage {
    public String marker;
    public DescribeSnapshotsListMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SnapshotList[] snapshots;
    public DescribeSnapshotsListMessage withSnapshots(SnapshotList[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}