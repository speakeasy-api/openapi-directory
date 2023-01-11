package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedChannelS3Storage
 * Used to store channel data in an S3 bucket that you manage. If customer-managed storage is selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of S3 storage after the data store is created.
**/
public class CustomerManagedChannelS3Storage {
    @JsonProperty("bucket")
    public String bucket;
    public CustomerManagedChannelS3Storage withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public CustomerManagedChannelS3Storage withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CustomerManagedChannelS3Storage withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}