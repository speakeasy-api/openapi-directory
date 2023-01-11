package openapisdk.models.shared;



/**
 * SnapshotMessage
 * Contains the output from the <a>DescribeClusterSnapshots</a> action. 
**/
public class SnapshotMessage {
    public String marker;
    public SnapshotMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public SnapshotList[] snapshots;
    public SnapshotMessage withSnapshots(SnapshotList[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}