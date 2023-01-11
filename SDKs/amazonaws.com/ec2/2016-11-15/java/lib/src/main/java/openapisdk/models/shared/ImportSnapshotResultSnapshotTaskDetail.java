package openapisdk.models.shared;



/**
 * ImportSnapshotResultSnapshotTaskDetail
 * Information about the import snapshot task.
**/
public class ImportSnapshotResultSnapshotTaskDetail {
    public java.util.Map<String, Object> description;
    public ImportSnapshotResultSnapshotTaskDetail withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> diskImageSize;
    public ImportSnapshotResultSnapshotTaskDetail withDiskImageSize(java.util.Map<String, Object> diskImageSize) {
        this.diskImageSize = diskImageSize;
        return this;
    }
    public java.util.Map<String, Object> encrypted;
    public ImportSnapshotResultSnapshotTaskDetail withEncrypted(java.util.Map<String, Object> encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public java.util.Map<String, Object> format;
    public ImportSnapshotResultSnapshotTaskDetail withFormat(java.util.Map<String, Object> format) {
        this.format = format;
        return this;
    }
    public java.util.Map<String, Object> kmsKeyId;
    public ImportSnapshotResultSnapshotTaskDetail withKmsKeyId(java.util.Map<String, Object> kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public java.util.Map<String, Object> progress;
    public ImportSnapshotResultSnapshotTaskDetail withProgress(java.util.Map<String, Object> progress) {
        this.progress = progress;
        return this;
    }
    public java.util.Map<String, Object> snapshotId;
    public ImportSnapshotResultSnapshotTaskDetail withSnapshotId(java.util.Map<String, Object> snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    public java.util.Map<String, Object> status;
    public ImportSnapshotResultSnapshotTaskDetail withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public ImportSnapshotResultSnapshotTaskDetail withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    public java.util.Map<String, Object> url;
    public ImportSnapshotResultSnapshotTaskDetail withUrl(java.util.Map<String, Object> url) {
        this.url = url;
        return this;
    }
    public ImportSnapshotResultSnapshotTaskDetailUserBucket userBucket;
    public ImportSnapshotResultSnapshotTaskDetail withUserBucket(ImportSnapshotResultSnapshotTaskDetailUserBucket userBucket) {
        this.userBucket = userBucket;
        return this;
    }
}