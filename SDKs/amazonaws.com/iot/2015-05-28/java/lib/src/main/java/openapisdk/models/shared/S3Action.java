package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Action
 * Describes an action to write data to an Amazon S3 bucket.
**/
public class S3Action {
    @JsonProperty("bucketName")
    public String bucketName;
    public S3Action withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cannedAcl")
    public CannedAccessControlListEnum cannedAcl;
    public S3Action withCannedAcl(CannedAccessControlListEnum cannedAcl) {
        this.cannedAcl = cannedAcl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public S3Action withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public S3Action withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}