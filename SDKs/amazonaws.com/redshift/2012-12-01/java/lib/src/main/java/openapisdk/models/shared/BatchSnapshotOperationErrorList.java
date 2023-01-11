package openapisdk.models.shared;



/**
 * BatchSnapshotOperationErrorList
 * Describes the errors returned by a snapshot.
**/
public class BatchSnapshotOperationErrorList {
    public String failureCode;
    public BatchSnapshotOperationErrorList withFailureCode(String failureCode) {
        this.failureCode = failureCode;
        return this;
    }
    public String failureReason;
    public BatchSnapshotOperationErrorList withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    public String snapshotClusterIdentifier;
    public BatchSnapshotOperationErrorList withSnapshotClusterIdentifier(String snapshotClusterIdentifier) {
        this.snapshotClusterIdentifier = snapshotClusterIdentifier;
        return this;
    }
    public String snapshotIdentifier;
    public BatchSnapshotOperationErrorList withSnapshotIdentifier(String snapshotIdentifier) {
        this.snapshotIdentifier = snapshotIdentifier;
        return this;
    }
}