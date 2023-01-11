package openapisdk.models.shared;



public class DescribeSnapshotsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeSnapshotsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> snapshots;
    public DescribeSnapshotsResult withSnapshots(java.util.Map<String, Object> snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}