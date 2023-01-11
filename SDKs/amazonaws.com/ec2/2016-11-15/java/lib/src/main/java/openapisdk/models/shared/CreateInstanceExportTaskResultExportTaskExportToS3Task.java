package openapisdk.models.shared;



/**
 * CreateInstanceExportTaskResultExportTaskExportToS3Task
 * Information about the export task.
**/
public class CreateInstanceExportTaskResultExportTaskExportToS3Task {
    public java.util.Map<String, Object> containerFormat;
    public CreateInstanceExportTaskResultExportTaskExportToS3Task withContainerFormat(java.util.Map<String, Object> containerFormat) {
        this.containerFormat = containerFormat;
        return this;
    }
    public java.util.Map<String, Object> diskImageFormat;
    public CreateInstanceExportTaskResultExportTaskExportToS3Task withDiskImageFormat(java.util.Map<String, Object> diskImageFormat) {
        this.diskImageFormat = diskImageFormat;
        return this;
    }
    public java.util.Map<String, Object> s3Bucket;
    public CreateInstanceExportTaskResultExportTaskExportToS3Task withS3Bucket(java.util.Map<String, Object> s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    public java.util.Map<String, Object> s3Key;
    public CreateInstanceExportTaskResultExportTaskExportToS3Task withS3Key(java.util.Map<String, Object> s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}