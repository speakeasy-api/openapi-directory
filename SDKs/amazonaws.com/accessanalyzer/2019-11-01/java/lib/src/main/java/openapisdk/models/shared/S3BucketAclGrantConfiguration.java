package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3BucketAclGrantConfiguration
 * A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.
**/
public class S3BucketAclGrantConfiguration {
    @JsonProperty("grantee")
    public AclGrantee grantee;
    public S3BucketAclGrantConfiguration withGrantee(AclGrantee grantee) {
        this.grantee = grantee;
        return this;
    }
    @JsonProperty("permission")
    public AclPermissionEnum permission;
    public S3BucketAclGrantConfiguration withPermission(AclPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
}