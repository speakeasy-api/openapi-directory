package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ReferenceDataSourceUpdate
 * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
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
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceRoleARNUpdate")
    public String referenceRoleARNUpdate;
    public S3ReferenceDataSourceUpdate withReferenceRoleArnUpdate(String referenceRoleARNUpdate) {
        this.referenceRoleARNUpdate = referenceRoleARNUpdate;
        return this;
    }
}