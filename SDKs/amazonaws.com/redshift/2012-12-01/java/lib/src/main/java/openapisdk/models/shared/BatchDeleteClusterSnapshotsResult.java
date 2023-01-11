package openapisdk.models.shared;



public class BatchDeleteClusterSnapshotsResult {
    public BatchSnapshotOperationErrorList[] errors;
    public BatchDeleteClusterSnapshotsResult withErrors(BatchSnapshotOperationErrorList[] errors) {
        this.errors = errors;
        return this;
    }
    public java.util.Map<String, Object>[] resources;
    public BatchDeleteClusterSnapshotsResult withResources(java.util.Map<String, Object>[] resources) {
        this.resources = resources;
        return this;
    }
}