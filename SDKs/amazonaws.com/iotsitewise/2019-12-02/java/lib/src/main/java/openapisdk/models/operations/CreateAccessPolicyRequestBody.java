package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAccessPolicyRequestBody {
    @JsonProperty("accessPolicyIdentity")
    public CreateAccessPolicyRequestBodyAccessPolicyIdentity accessPolicyIdentity;
    public CreateAccessPolicyRequestBody withAccessPolicyIdentity(CreateAccessPolicyRequestBodyAccessPolicyIdentity accessPolicyIdentity) {
        this.accessPolicyIdentity = accessPolicyIdentity;
        return this;
    }
    @JsonProperty("accessPolicyPermission")
    public CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum accessPolicyPermission;
    public CreateAccessPolicyRequestBody withAccessPolicyPermission(CreateAccessPolicyRequestBodyAccessPolicyPermissionEnum accessPolicyPermission) {
        this.accessPolicyPermission = accessPolicyPermission;
        return this;
    }
    @JsonProperty("accessPolicyResource")
    public CreateAccessPolicyRequestBodyAccessPolicyResource accessPolicyResource;
    public CreateAccessPolicyRequestBody withAccessPolicyResource(CreateAccessPolicyRequestBodyAccessPolicyResource accessPolicyResource) {
        this.accessPolicyResource = accessPolicyResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAccessPolicyRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAccessPolicyRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}