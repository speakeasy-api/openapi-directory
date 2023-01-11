package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketLevelPermissions
 * Provides information about the bucket-level permissions settings for an S3 bucket.
**/
public class BucketLevelPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessControlList")
    public AccessControlList accessControlList;
    public BucketLevelPermissions withAccessControlList(AccessControlList accessControlList) {
        this.accessControlList = accessControlList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blockPublicAccess")
    public BlockPublicAccess blockPublicAccess;
    public BucketLevelPermissions withBlockPublicAccess(BlockPublicAccess blockPublicAccess) {
        this.blockPublicAccess = blockPublicAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketPolicy")
    public BucketPolicy bucketPolicy;
    public BucketLevelPermissions withBucketPolicy(BucketPolicy bucketPolicy) {
        this.bucketPolicy = bucketPolicy;
        return this;
    }
}