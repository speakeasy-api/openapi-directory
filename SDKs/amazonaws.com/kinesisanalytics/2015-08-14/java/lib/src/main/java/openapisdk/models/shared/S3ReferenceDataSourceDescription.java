package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3ReferenceDataSourceDescription
 * Provides the bucket name and object key name that stores the reference data.
**/
public class S3ReferenceDataSourceDescription {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ReferenceDataSourceDescription withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("FileKey")
    public String fileKey;
    public S3ReferenceDataSourceDescription withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonProperty("ReferenceRoleARN")
    public String referenceRoleARN;
    public S3ReferenceDataSourceDescription withReferenceRoleArn(String referenceRoleARN) {
        this.referenceRoleARN = referenceRoleARN;
        return this;
    }
}