package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccessPolicyRequestBody {
    @JsonProperty("accessPolicyIdentity")
    public UpdateAccessPolicyRequestBodyAccessPolicyIdentity accessPolicyIdentity;
    public UpdateAccessPolicyRequestBody withAccessPolicyIdentity(UpdateAccessPolicyRequestBodyAccessPolicyIdentity accessPolicyIdentity) {
        this.accessPolicyIdentity = accessPolicyIdentity;
        return this;
    }
    @JsonProperty("accessPolicyPermission")
    public UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum accessPolicyPermission;
    public UpdateAccessPolicyRequestBody withAccessPolicyPermission(UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum accessPolicyPermission) {
        this.accessPolicyPermission = accessPolicyPermission;
        return this;
    }
    @JsonProperty("accessPolicyResource")
    public UpdateAccessPolicyRequestBodyAccessPolicyResource accessPolicyResource;
    public UpdateAccessPolicyRequestBody withAccessPolicyResource(UpdateAccessPolicyRequestBodyAccessPolicyResource accessPolicyResource) {
        this.accessPolicyResource = accessPolicyResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateAccessPolicyRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}