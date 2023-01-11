package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ReferenceDataSource
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.</p> <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
**/
public class S3ReferenceDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ReferenceDataSource withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileKey")
    public String fileKey;
    public S3ReferenceDataSource withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
}