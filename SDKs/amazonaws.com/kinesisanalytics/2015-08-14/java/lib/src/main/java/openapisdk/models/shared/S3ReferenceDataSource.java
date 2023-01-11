package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3ReferenceDataSource
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p> <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger reloading of data into your application.</p>
**/
public class S3ReferenceDataSource {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ReferenceDataSource withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("FileKey")
    public String fileKey;
    public S3ReferenceDataSource withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonProperty("ReferenceRoleARN")
    public String referenceRoleARN;
    public S3ReferenceDataSource withReferenceRoleArn(String referenceRoleARN) {
        this.referenceRoleARN = referenceRoleARN;
        return this;
    }
}