package openapisdk.models.shared;



/**
 * ImportSnapshotResultSnapshotTaskDetailUserBucket
 * The Amazon S3 bucket for the disk image.
**/
public class ImportSnapshotResultSnapshotTaskDetailUserBucket {
    public java.util.Map<String, Object> s3Bucket;
    public ImportSnapshotResultSnapshotTaskDetailUserBucket withS3Bucket(java.util.Map<String, Object> s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    public java.util.Map<String, Object> s3Key;
    public ImportSnapshotResultSnapshotTaskDetailUserBucket withS3Key(java.util.Map<String, Object> s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}