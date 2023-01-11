package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ExportTask
 * <p>Contains the details of a snapshot export to Amazon S3. </p> <p>This data type is used as a response element in the <code>DescribeExportTasks</code> action. </p>
**/
public class ExportTask {
    public String[] exportOnly;
    public ExportTask withExportOnly(String[] exportOnly) {
        this.exportOnly = exportOnly;
        return this;
    }
    public String exportTaskIdentifier;
    public ExportTask withExportTaskIdentifier(String exportTaskIdentifier) {
        this.exportTaskIdentifier = exportTaskIdentifier;
        return this;
    }
    public String failureCause;
    public ExportTask withFailureCause(String failureCause) {
        this.failureCause = failureCause;
        return this;
    }
    public String iamRoleArn;
    public ExportTask withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    public String kmsKeyId;
    public ExportTask withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public Long percentProgress;
    public ExportTask withPercentProgress(Long percentProgress) {
        this.percentProgress = percentProgress;
        return this;
    }
    public String s3Bucket;
    public ExportTask withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    public String s3Prefix;
    public ExportTask withS3Prefix(String s3Prefix) {
        this.s3Prefix = s3Prefix;
        return this;
    }
    public OffsetDateTime snapshotTime;
    public ExportTask withSnapshotTime(OffsetDateTime snapshotTime) {
        this.snapshotTime = snapshotTime;
        return this;
    }
    public String sourceArn;
    public ExportTask withSourceArn(String sourceArn) {
        this.sourceArn = sourceArn;
        return this;
    }
    public String status;
    public ExportTask withStatus(String status) {
        this.status = status;
        return this;
    }
    public OffsetDateTime taskEndTime;
    public ExportTask withTaskEndTime(OffsetDateTime taskEndTime) {
        this.taskEndTime = taskEndTime;
        return this;
    }
    public OffsetDateTime taskStartTime;
    public ExportTask withTaskStartTime(OffsetDateTime taskStartTime) {
        this.taskStartTime = taskStartTime;
        return this;
    }
    public Long totalExtractedDataInGB;
    public ExportTask withTotalExtractedDataInGb(Long totalExtractedDataInGB) {
        this.totalExtractedDataInGB = totalExtractedDataInGB;
        return this;
    }
    public String warningMessage;
    public ExportTask withWarningMessage(String warningMessage) {
        this.warningMessage = warningMessage;
        return this;
    }
}