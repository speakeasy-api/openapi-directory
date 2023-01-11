package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketPermissionConfiguration
 * Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
**/
public class BucketPermissionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountLevelPermissions")
    public AccountLevelPermissions accountLevelPermissions;
    public BucketPermissionConfiguration withAccountLevelPermissions(AccountLevelPermissions accountLevelPermissions) {
        this.accountLevelPermissions = accountLevelPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketLevelPermissions")
    public BucketLevelPermissions bucketLevelPermissions;
    public BucketPermissionConfiguration withBucketLevelPermissions(BucketLevelPermissions bucketLevelPermissions) {
        this.bucketLevelPermissions = bucketLevelPermissions;
        return this;
    }
}