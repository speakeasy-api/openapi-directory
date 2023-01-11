package openapisdk.models.shared;



public class BatchModifyClusterSnapshotsOutputMessage {
    public BatchSnapshotOperationErrors[] errors;
    public BatchModifyClusterSnapshotsOutputMessage withErrors(BatchSnapshotOperationErrors[] errors) {
        this.errors = errors;
        return this;
    }
    public java.util.Map<String, Object>[] resources;
    public BatchModifyClusterSnapshotsOutputMessage withResources(java.util.Map<String, Object>[] resources) {
        this.resources = resources;
        return this;
    }
}