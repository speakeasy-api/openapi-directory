package openapisdk.models.shared;



/**
 * BatchSnapshotOperationErrors
 * Describes the errors returned by a snapshot.
**/
public class BatchSnapshotOperationErrors {
    public String failureCode;
    public BatchSnapshotOperationErrors withFailureCode(String failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    public String failureReason;
    public BatchSnapshotOperationErrors withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    public String snapshotClusterIdentifier;
    public BatchSnapshotOperationErrors withSnapshotClusterIdentifier(String snapshotClusterIdentifier) {
        this.snapshotClusterIdentifier = snapshotClusterIdentifier;
        return this;
    }
    public String snapshotIdentifier;
    public BatchSnapshotOperationErrors withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
}