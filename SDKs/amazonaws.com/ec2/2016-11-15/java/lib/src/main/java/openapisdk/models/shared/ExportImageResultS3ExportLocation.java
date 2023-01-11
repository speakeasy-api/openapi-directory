package openapisdk.models.shared;



/**
 * ExportImageResultS3ExportLocation
 * Information about the destination Amazon S3 bucket.
**/
public class ExportImageResultS3ExportLocation {
    public java.util.Map<String, Object> s3Bucket;
    public ExportImageResultS3ExportLocation withS3Bucket(java.util.Map<String, Object> s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    public java.util.Map<String, Object> s3Prefix;
    public ExportImageResultS3ExportLocation withS3Prefix(java.util.Map<String, Object> s3Prefix) {
        this.s3Prefix = s3Prefix;
        return this;
    }
}