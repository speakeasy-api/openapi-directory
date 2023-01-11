package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ReferenceDataSourceUpdate
 * For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table. 
**/
public class S3ReferenceDataSourceUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketARNUpdate")
    public String bucketARNUpdate;
    public S3ReferenceDataSourceUpdate withBucketArnUpdate(String bucketARNUpdate) {
        this.bucketARNUpdate = bucketARNUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileKeyUpdate")
    public String fileKeyUpdate;
    public S3ReferenceDataSourceUpdate withFileKeyUpdate(String fileKeyUpdate) {
        this.fileKeyUpdate = fileKeyUpdate;
        return this;
    }
}