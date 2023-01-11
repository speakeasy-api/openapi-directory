package openapisdk.models.shared;



public class ImportSnapshotResult {
    public java.util.Map<String, Object> description;
    public ImportSnapshotResult withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> importTaskId;
    public ImportSnapshotResult withImportTaskId(java.util.Map<String, Object> importTaskId) {
        this.importTaskId = importTaskId;
        return this;
    }
    public ImportSnapshotResultSnapshotTaskDetail snapshotTaskDetail;
    public ImportSnapshotResult withSnapshotTaskDetail(ImportSnapshotResultSnapshotTaskDetail snapshotTaskDetail) {
        this.snapshotTaskDetail = snapshotTaskDetail;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public ImportSnapshotResult withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}