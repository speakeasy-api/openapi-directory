package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomerManagedDatastoreS3Storage
 * S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
public class CustomerManagedDatastoreS3Storage {
    @JsonProperty("bucket")
    public String bucket;
    public CustomerManagedDatastoreS3Storage withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public CustomerManagedDatastoreS3Storage withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CustomerManagedDatastoreS3Storage withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}