package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBucketRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessRules")
    public AccessRules accessRules;
    public UpdateBucketRequest withAccessRules(AccessRules accessRules) {
        this.accessRules = accessRules;
        return this;
    }
    @JsonProperty("bucketName")
    public String bucketName;
    public UpdateBucketRequest withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readonlyAccessAccounts")
    public String[] readonlyAccessAccounts;
    public UpdateBucketRequest withReadonlyAccessAccounts(String[] readonlyAccessAccounts) {
        this.readonlyAccessAccounts = readonlyAccessAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versioning")
    public String versioning;
    public UpdateBucketRequest withVersioning(String versioning) {
        this.versioning = versioning;
        return this;
    }
}