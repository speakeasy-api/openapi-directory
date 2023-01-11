package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3Config
 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>
**/
public class S3Config {
    @JsonProperty("BucketAccessRoleArn")
    public String bucketAccessRoleArn;
    public S3Config withBucketAccessRoleArn(String bucketAccessRoleArn) {
        this.bucketAccessRoleArn = bucketAccessRoleArn;
        return this;
    }
}