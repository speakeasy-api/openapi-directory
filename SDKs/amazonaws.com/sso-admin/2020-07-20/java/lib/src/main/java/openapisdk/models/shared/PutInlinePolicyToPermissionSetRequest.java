package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutInlinePolicyToPermissionSetRequest {
    @JsonProperty("InlinePolicy")
    public String inlinePolicy;
    public PutInlinePolicyToPermissionSetRequest withInlinePolicy(String inlinePolicy) {
        this.inlinePolicy = inlinePolicy;
        return this;
    }
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public PutInlinePolicyToPermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public PutInlinePolicyToPermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}