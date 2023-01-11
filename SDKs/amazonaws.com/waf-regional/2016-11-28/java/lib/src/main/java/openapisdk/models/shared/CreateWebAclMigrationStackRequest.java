package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWebAclMigrationStackRequest {
    @JsonProperty("IgnoreUnsupportedType")
    public Boolean ignoreUnsupportedType;
    public CreateWebAclMigrationStackRequest withIgnoreUnsupportedType(Boolean ignoreUnsupportedType) {
        this.ignoreUnsupportedType = ignoreUnsupportedType;
        return this;
    }
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public CreateWebAclMigrationStackRequest withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonProperty("WebACLId")
    public String webACLId;
    public CreateWebAclMigrationStackRequest withWebAclId(String webACLId) {
        this.webACLId = webACLId;
        return this;
    }
}