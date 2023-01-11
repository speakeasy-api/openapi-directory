package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetInlinePolicyForPermissionSetRequest {
    @JsonProperty("InstanceArn")
    public String instanceArn;
    public GetInlinePolicyForPermissionSetRequest withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonProperty("PermissionSetArn")
    public String permissionSetArn;
    public GetInlinePolicyForPermissionSetRequest withPermissionSetArn(String permissionSetArn) {
        this.permissionSetArn = permissionSetArn;
        return this;
    }
}