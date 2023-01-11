package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedDatastoreS3StorageSummary
 * Contains information about the data store that you manage.
**/
public class CustomerManagedDatastoreS3StorageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public CustomerManagedDatastoreS3StorageSummary withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public CustomerManagedDatastoreS3StorageSummary withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CustomerManagedDatastoreS3StorageSummary withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}