package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedChannelS3StorageSummary
 * Used to store channel data in an S3 bucket that you manage.
**/
public class CustomerManagedChannelS3StorageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public CustomerManagedChannelS3StorageSummary withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public CustomerManagedChannelS3StorageSummary withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CustomerManagedChannelS3StorageSummary withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}